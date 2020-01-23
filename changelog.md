1. Generated component First.
  Public fields:  
        name: string;
        description: string;
        price: number;
        isAvailable: boolean;
        previousPrices: number[];
    Private fields:
        private tags: string[];
        private category: Category; (Category is a created enum, it containts 3 values: Category1, Category2, Category3).
    Properties:
        categoryString (returns string literal of enum).
        tagsJoined (returns concatenated, comma-separated string of tags).
    Initialized data in ngOnInit.
    Data displayed as ul/li in the template.
    Generated Pipe average, which transforms array of numbers into their average. Used this pipe in a template for displaying average of previous prices.
2. Generated component Product.
    Input fields:
        name: string;
        description: string;
        price: number;
    Methods:
        onBuy (logs into a console name of item bought).
    Fields are displayed in template as ul/li. Also there is a button, that calls onBuy().
    Created model ProductModel (name, description, price).
    Generated ProductsService (returns hardcoded array of Product models).
3. Generated component ProductList.
    Public fields:
        products: ProductModel[];
    Injected Services: ProductsService.
    Initialized products field with result from ProductsService.
    In a template product component is added with *ngFor directive, also passed input properties from ProductModel.
4. Generated component CartItem.
    Input propeties:
        product: string;
        quantity: number;
    Properties are displayed in template as ul/li. 
    Created model CartItemModel (product, quantity).
5. Generated component Cart.
    Public fields:
        cart: CartItemModel[];
    Injected services: CartService.
    Initialized field cart with result from CartService.
    Generated Service CartService (returnes hardcoded array of CartModel).
    In a template CartItems are added with *ngFor template, input properties are passed from CartItemModel.
    In a template added *ngIf directive to show cart only if there are some items otherwise, show message that it is empty.
