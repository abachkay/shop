import { ProductModel } from 'src/app/products/models/product.model';

export class CartProductModel {
  constructor(
    public product: ProductModel,
    public quantity: number
  ) {
  }
}
