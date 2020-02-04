import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { ProductModel } from 'src/app/products/product/models/product.model';
import { CartItemModel } from '../../cart-item/models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private addProductChannel = new Subject<ProductModel>();

  addProductChannel$ = this.addProductChannel.asObservable();

  addProduct(product: ProductModel) {
    this.addProductChannel.next(product);
  }
  getTotalQuantity(cartItems: CartItemModel[]): number {
    return cartItems.reduce((accumulator, current) => accumulator + current.quantity, 0);
  }
  getTotalPrice(cartItems: CartItemModel[]): number {
    return cartItems.reduce((accumulator, current) => accumulator + current.product.price * current.quantity, 0);
  }
}
