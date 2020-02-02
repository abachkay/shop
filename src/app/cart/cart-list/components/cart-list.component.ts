import { Component, OnInit } from '@angular/core';

import { CartService } from '../services/cart.service';
import { CartItemModel } from 'src/app/cart/cart-item/models/cart-item.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cart: CartItemModel[];

  constructor(
    private cartService: CartService) {
  }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  onAddItem() {

  }
}
