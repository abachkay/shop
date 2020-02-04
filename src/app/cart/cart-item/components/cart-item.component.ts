import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CartItemModel } from '../models/cart-item.model';
import { CartService } from 'src/app/cart/cart-list/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: CartItemModel;
  @Output() cartItemDeleted = new EventEmitter<CartItemModel>();

  constructor(
    private cartService: CartService) { }

  ngOnInit() {
  }

  onAddItem(item: CartItemModel) {
    this.cartItem.quantity++;
    this.cartService.incrementProduct(item.product.name);
  }
  onSubtractItem(item: CartItemModel) {
    this.cartItem.quantity--;

    if (!this.cartItem.quantity) {
      this.cartItemDeleted.emit(this.cartItem);
    }

    this.cartService.decrementProduct(item.product.name);
  }
  onDeleteItem(item: CartItemModel) {
    this.cartItemDeleted.emit(this.cartItem);
    this.cartService.removeProduct(item);
  }
}
