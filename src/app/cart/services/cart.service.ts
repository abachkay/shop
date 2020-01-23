import { Injectable } from '@angular/core';

import { CartItemModel } from 'src/app/cart-item/models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { }

  getCart(): CartItemModel[] {
    return [
      new CartItemModel('aaa', 5),
      new CartItemModel('bbb', 4)
    ];
  }
}
