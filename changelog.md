Version 7 (NgRx)  
1. Applied @ngrx/store, @ngrx/effects for Products.  
  1.1. Created state, actions, reducers, selectors, effects.  
  1.2. Applied @ngrx/entity: used default selectors, CRUD operations for managing entity collections.    
  1.3. Implemented facade pattern.  
  1.4. Substituted every usage of ProductsService with ProductsFacade.  
  1.5. Implemented ProductsStatePreloadingGuard to preload entities into store. Used it in routes configuration to preload products everywhere, where it is necessary.    
2. Applied @ngrx/router-store.  
  2.1. Implemented navigation actions GO, FORWARD and BACK.  
  2.2. Implemented getProductByUrl selector.  
  2.3. Implemented facade pattern.  
  2.4. Substituted every usage of Router with RouterFacade.  
3. Applied @ngrx/store-devtools for development environment.  

Version 6 (http)     
  
1. Added json server and implemented backend for existing functionality.  
  1.1. Created db.json, which contains products and users (added 2 users to db: with admin permissions - username=admin, password=admin, and regular user without admin permissions - username=user1, password=password).  
  1.2. Created HttpService, with methods get(), getById(), put(), post() and delete(), which handle respective requests.   
  1.3. Used promise approach for user login logic.  
  1.4. Used observable approach for products logic.  
  1.5. Added delete functionality for products (in admin management).  
  1.6. Fixed issue with dateModified being null for new products and not updating after edit.  
2. Implemented TimingInterceptor, which measures the duration of products-related requests (but not for users) and outputs it to a console.  
3. Implemeted AppSettingsService.  
  1.1. Added AppSettingsModel - has one numeric field: version, it defaults to 0.  
  1.2. Added app-settings.json file to assets folder.  
  1.3. In AppSettingsService implemented method getAppSettings() which tries to get settings from localStorageService. If they are absent, tries to get them from app-settings.json (makes two tries to get them). If success, then writes them to local storage and returns them, otherwise returns default AppSettingsModel.    
  1.4. Used AppSettingsService to output version to a console in AboutComponent.  

Version 5 (routing)   
  
1. Configured routing for an application.  
  1.1. Routing configured in 2 modules: AdminRoutingModule and AppRoutingModule. First contains routes for admin management, second - all other routes.  
  2.2. AdminRoutingModule contains routes: "admin" - redirects to "admin/products", "admin/products" - lists products for admin, "admin/product/add" - form to create new product, "admin/product/edit/:productID" - same form but for editing, "admin/orders" - for orders (currently is empty and does not have any logic).  
  2.3. AppRoutingModule contains routes: "/product-list" - lists products for user, "/product/:productID" - view of single product with all details, "/about" - content of AboutComponent from previous tasks, "/cart" - cart items, "/order" - creating order, "/login" - form for logging in, "admin" - admin management (has canActivate, canLoad guards, which use UserService to check if user is admin, has lazy loading of children from AdminRoutingModule), '' - redirects to "/product-list", any other route leads to PathNotFound component.  
2. Created UserService.  
  2.1. It has methods login and logout, first one sets isLoggedIn parameter to true and checks if user is admin, if he is, sets also isAdmin to true (currentrly there is no backend so username and password for admin are hardcoded - username: "admin", password: "admin").  
  2.2. It uses LocalStorageService to save isLoggedIn and isAdmin parameters to localstorage, so that they are preserved after reloading page.   
3. Created LoginComponent.  
  3.1. Added form to a template, it contains fields for username and password. Added buttons to login and logout. Added ngIf directives to a template to display status of user (if user is logged in and if he is admin).  
  3.2. Added methods to a component for logging in and logging out, they call respective methods of UserService.  
4. Update products and cart logic.  
  4.1. They are now separated by different routes.  
  4.2. ProductListComponent now does not include products in a template, but references with routerLink to products.  
  4.3. Updated ProductModel: added id field to identify product (it is included into the route).  
5. Updated AppComponent: it now contains navigation bar to access different features of applicaiton.  
6. Added OrderComponent.  
  6.1. User navigates to it from CartComponent by clicking button "Create Order" (it uses router.navigateByUrl method).  
  6.2. It has method confirmOrder() which removes products from cart and navigates to "/product-list".  
  6.3. It has a dropdown for payment method in a template (no logic, just to fill a page)
  6.3. It has a button to call the confirm method and also the information about total sum of order.  
7. Added PathNotFoundComponent to redirect here if path is not valid.  
8. Added Admin management.  
  8.1. Created separate AdminModule, which is lazily loaded in AppRoutingModule.  
  8.2. Added AdminComponent: it contains just sub-navigation for admin management (routerLink directives were used in a template).  
  8.3. Added AdminProductsComponent: it uses ProductsService to get products and display them in a template (only names and references to AdminProductFormComponent via routerLink), also has an add button for adding new product, which navigates to the same AdminProductFormComponent form, but uses a different route.  
  8.3. Added AdminProductFormComponent: it has a form with fields for ProductModel properties and a Save button, which calls newly created upsertProduct method of ProductService. This method creates or updates product, depending on the provided ProductModel (if id was set, then update, if id is null, then create), it also updates LastUpdatedDate field and generates new id (in case of adding new product).  
  8.4. Added AdminProductFormResolveGuard it uses ActivatedRouteSnapshot to check if productID was provided in the route and pulls product from ProductService with newly created method getProductById, otherwise returns empty ProductModel.  
  8.5. Created AdminOrdersComponent: it is currently empty and has no logic, there is just reference to it from navigation bar in AdminComponent.    
  8.6. Added AdminGuard that uses UserService to check isAdmin field and determine if user is admin or not. It has canActivate and canLoad methods. It is used in AppRoutingModule for "admin" route.  

Version 4 (pipes)  
  
1. Applied default pipes to an application.   
  1.1. Added 2 new fields to product model: dateModified: Date, category: string. They were initialized in ProductsService and displayed in a template.  
  1.2. Applied currency pipe to price field in product template and totalPrice field in cart-list template.  
  1.3. Applied date pipe to dateModified field in product template.  
  1.4. Applied uppercase pipe to category field in product template.  
  1.5. Redesigned ProductService and ProductComponent to work with a Promise of products.  
  1.6. Appied async pipe to products promise in products template.  
2. Created orderBy pipe.  
  2.1. It takes 2 parameters path and isDesc.  
  2.2. Parameter path shows by which fields collection should be ordered. If a field is nested, nodes should be divided by '/' (e.g. to order by item.field.nestedField, path should be specified as 'field/nestedField').  
  2.3. Parameter isDesc controls the direction of sorting: if it is true then items are sorted descending, otherwise - ascending.  
  2.4. Added dropdowns to cart-items template to select by which field and direction cart items should be ordered.  
  2.5. Applied orderBy pipe to cart items in cart-items template, parameters were taken from dropdowns.  
3. CommonModule, FormsModule were exported from SharedModule and removed from other modules. Pipe orderBy was also exported from SharedModule.   
  
Version 3 (services and DI)  

1. Updated CartService.  
  1.1. Added field cartProducts: CartProductModel[] - products that are currently in a cart.  
  1.2. Added fields totalQuantity: number & totalSum: number. Moved logic of calculating sum and quantity to newly created method updateCartData.  
  1.3. Changed addProductChannel to cartProductsChannel. Now it notifies subscribers if any change to a cart has happened.  
  1.4. Created method updateCartData it calls newly created LocalStorageService to save cartProducts to a local storage, so that cart items are preserved after page reload. Then it fires event to notify subscribers that the cart was changed. And in the end it updates values of totalQuantity & totalSum.  
  1.5. Modified method addProduct. Now it adds product to a cartProducts field or updates quantity (if product is already in the cart), then calls updateCartData.  
  1.6. Added methods removeProduct, increaseQuantity, decreaseQuantity, removeAllProducts. Moved logic of appropriate operations from CartComponent to these methods. They all call updateCartData in the end.  
2. Modified communication between cart and products.  
  2.1. Moved all cart logic to CartService.  
  2.2. Added observables to CartListComponent and ProductListComponent, to react to changes in CartService and update cartProducts and products accordingly.  
  2.3. Set change detection strategy for CartItemComponent and ProductComponent to OnPush. Moved all communication with service to CartListComponent and ProductListComponent, so that CartItemComponent and ProductComponent have only inputs and outputs.  
  2.4. Changed initialization logic for products to first get product from ProductService, then check cart if there are some items in a cart (they can be there at the beginning if they were stored in the local storage) and update product quantities accordingly.  
3. Created LocalStorageService. It uses window.localStorage to work with local storage. It has methods: setItem(), getItem(), removeItem().  
4. Created service ConfigOptionsService.  
  4.1. Created model ConfigOptionsModel. Constructor has three optional parameters: id?: number, login?: string, password?: string.  
  4.2. Added field configOptions: ConfigOptionsModel to ConfigOptionsModel.  
  4.3. Added method to set this field and a method to get it.  
5. Created service for constants. It contains an object with constants.  
6. Created GeneratorService. It contains a function randomStringGeneratorFactory for creating random string generators of specified length.  
7. Created component AboutComponent.  
  7.1. It's constructor injects: LocalStorageService as class, ConfigOptionsService as optional, constants as value and also 2 random strings generators using factory (for 5 characters and 7 characters).  
  7.2. It has ngOnInit method, that logs different operations with all injected services into a console.  
8. Created directive ClickHighlightDirective.  
  8.1. It's constructor injects ElementRef and Renderer2.  
  8.2. It has a HostListener on click to change font-size, font-style and border of host, using ElementRef and Renderer2.  
  8.3. This directive is added to a header in a template of the About component.  
  
Version 2 (components)   
  
1. Removed component First.  
2. Modified AppComponent  
  2.1. Added h1 with template variable appHeader.  
  2.2. In component added field header with attribute @ViewChild to get ElementRef for header, then in ngAfterInit set header value to "Home Tasks".  
3. Broke application into 5 modules AppModule, ProductsModule, CartModule, SharedModule, OrdersModule.  
4. Modified component product  
  4.1. Changed 3 inputs to one of type ProductModel which was already existing.  
  4.2. Added output productBought and emited it when clicking :buy: button (previously button click just logged into console).  
  4.3. Modified template: added attribute disabed to "buy" button (button will be disabled if there are no products to buy), added ngClass to show text green if product quantity > 10 else red. Added those classes into css file.  
5. Modified component ProductList  
  5.1. Added method onProductBought, which binds to productBought output of component Product. This method now calls addProduct method of newly created CartService.  
6. Modified component CartItem  
  6.1. Changed CartItemModel now it contains ProductModel and quantity instead of product name (string) and quantity.  
  6.2. Added 3 buttons to template: increment item, decrement item, delete item from cart. Button for increment is disabled if there are no more products, similarly to how it was made in product component.  
  6.3. Added methods onAddItem and onSubtractItem, which are called after clicking buttons increment and decrement. These methods change quantities of products in the cart and in the store respectively.  
  6.3. Added method onDeleteItem, which is called when delete from cart button was clicked. This method changes quantities of products in the cart and in the store as well, but also emits cartItemDeleted output to notify parent component, that this item should be deleted.  
7. Added Cart service  
  7.1. In has methods getTotalQuantity and getTotalPrice. They take array of cart items and calculate total quantity and price respectively.  
  7.2. It imports txjs library and contains an observable addProductChannel$ and method addProduct. They are used to communicate between product list component and cart list component: when button buy is clicked on product component, it emits output to product list component, then product list compontent calls method addProduct of CartService, and because cart list component is subscribed to an observable, it will update cart respectively.  
8. Modified Cart component  
  8.1. Renamed component to CartList.  
  8.2. Added properties totalQuantity and totalPrice which call newly created CartService to obtain their values, and added them to a template.  
  8.3. Added subscription to an observable addProductChannel$ in CartService. Added handler for subscription which adds new cart item, or increments quantity of existing one (if it is already in the cart). Used ngOnInit to create subscribtion and ngOnDestroy to remove it.  
  8.4. Added method onItemDeleted which is bound to cartItemDeleted output of cart item component. It deletes cart item from array.  
  8.5. Added newly created appHighlight directive to car item component in template. It highights cart item, if mouse pointer is currently on.  
9. Added directive appHighlight to shared module. It uses @HostBinding and @HostListener to modify class of the host. When mouse pointer is over host it will add a class, which will highligt item's background.  

Version 1

1. Generated component First.  
  1.1. Public fields:  
    name: string;  
    description: string;  
    price: number;  
    isAvailable: boolean;  
    previousPrices: number[];  
  1.2. Private fields:
    private tags: string[];  
    private category: Category; (Category is a created enum, it containts 3 values: Category1, Category2, Category3).  
  1.3. Properties:
    categoryString (returns string literal of enum).  
    tagsJoined (returns concatenated, comma-separated string of tags).  
  1.4. Initialized data in ngOnInit.  
  1.5. Data displayed as ul/li in the template.  
  1.6. Generated Pipe average, which transforms array of numbers into their average. Used this pipe in a template for displaying average of previous prices.  
2. Generated component Product.  
  2.1. Input fields:  
    name: string;  
    description: string;  
    price: number;  
  2.2. Methods:  
    onBuy (logs into a console name of item bought).  
  2.3. Fields are displayed in template as ul/li. Also there is a button, that calls onBuy().  
  2.4. Created model ProductModel (name, description, price).  
  2.5. Generated ProductsService (returns hardcoded array of Product models).  
3. Generated component ProductList.  
  3.1. Public fields:  
    products: ProductModel[];  
  3.2. Injected Services: ProductsService.  
  3.3. Initialized products field with result from ProductsService.  
  3.4. In a template product component is added with *ngFor directive, also passed input properties from ProductModel.  
4. Generated component CartItem.  
  4.1. Input propeties:  
    product: string;  
    quantity: number;  
  4.2. Properties are displayed in template as ul/li.  
  4.3. Created model CartItemModel (product, quantity).  
5. Generated component Cart.  
  5.1. Public fields:  
    cart: CartItemModel[];  
  5.2. Injected services: CartService.  
  5.3. Initialized field cart with result from CartService.  
  5.4. Generated Service CartService (returnes hardcoded array of CartModel).  
  5.5. In a template CartItems are added with *ngFor template, input properties are passed from CartItemModel.  
  5.6. In a template added *ngIf directive to show cart only if there are some items otherwise, show message that it is empty.
