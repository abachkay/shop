import { ProductModel } from 'src/app/products/product/models/product.model';

export class CartItemModel {
    constructor(
        public product: ProductModel,
        public quantity: number
    ) {
    }
}
