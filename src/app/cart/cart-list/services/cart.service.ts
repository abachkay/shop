import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { ProductModel } from 'src/app/products/product/models/product.model';
import { CartItemModel } from '../../cart-item/models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private addProductChannel = new Subject<ProductModel>();
  private removeProductChannel = new Subject<CartItemModel>();
  private incrementQuantityChannel = new Subject<string>();
  private decrementQuantityChannel = new Subject<string>();

  addProductChannel$ = this.addProductChannel.asObservable();
  removeProductChannel$ = this.removeProductChannel.asObservable();
  incrementQuantityChannel$ = this.incrementQuantityChannel.asObservable();
  decrementQuantityChannel$ = this.decrementQuantityChannel.asObservable();

  addProduct(product: ProductModel) {
    this.addProductChannel.next(product);
  }
  removeProduct(cartItem: CartItemModel) {
    this.removeProductChannel.next(cartItem);
  }
  incrementProduct(productName: string) {
    this.incrementQuantityChannel.next(productName);
  }
  decrementProduct(productName: string) {
    this.decrementQuantityChannel.next(productName);
  }
  getTotalQuantity(cartItems: CartItemModel[]): number {
    return cartItems.reduce((accumulator, current) => accumulator + current.quantity, 0);
  }
  getTotalPrice(cartItems: CartItemModel[]): number {
    return cartItems.reduce((accumulator, current) => accumulator + current.product.price * current.quantity, 0);
  }
}
