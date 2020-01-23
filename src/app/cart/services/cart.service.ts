import { Injectable } from '@angular/core';

import { CartItemModel } from 'src/app/cart-item/models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { }

  getCart(): CartItemModel[] {
    return null;
    // return [
    //   new CartItemModel('product1', 5),
    //   new CartItemModel('product2', 4)
    // ];
  }
}
