import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CartItemModel } from '../models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: CartItemModel;

  @Output() cartItemDeleted = new EventEmitter<CartItemModel>();

  ngOnInit() {
  }

  onAddItem() {
    this.cartItem.quantity++;
    this.cartItem.product.quantity--;
  }
  onSubtractItem() {
    this.cartItem.quantity--;
    this.cartItem.product.quantity++;

    if (!this.cartItem.quantity) {
      this.cartItemDeleted.emit(this.cartItem);
    }
  }
  onDeleteItem() {
    this.cartItemDeleted.emit(this.cartItem);
    this.cartItem.product.quantity += this.cartItem.quantity;
  }
}
