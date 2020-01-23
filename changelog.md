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
