import { Component, OnInit } from '@angular/core';

import { CartItemModel } from 'src/app/cart-item/models/cart-item.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
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
