Version 2   

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
