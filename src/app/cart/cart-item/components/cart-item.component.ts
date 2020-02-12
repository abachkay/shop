import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { CartProductModel } from '../models/cart-product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {
  @Input() cartProduct: CartProductModel;

  @Output() cartProductRemoved = new EventEmitter<CartProductModel>();
  @Output() cartProductQuantityIncreased = new EventEmitter<CartProductModel>();
  @Output() cartProductQuantityDecreased = new EventEmitter<CartProductModel>();

  ngOnInit() { }

  onIncreaseQuantity() {
    this.cartProductQuantityIncreased.emit(this.cartProduct);
  }

  onDecreaseQuantity() {
    this.cartProductQuantityDecreased.emit(this.cartProduct);
  }

  onRemoveProduct() {
    this.cartProductRemoved.emit(this.cartProduct);
  }
}
