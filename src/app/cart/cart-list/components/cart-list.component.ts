import { Component, OnInit, OnDestroy } from '@angular/core';

import { CartProductModel } from 'src/app/cart/cart-item/models/cart-product.model';
import { CartService } from 'src/app/cart/cart-list/services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  get cartProducts(): CartProductModel[] {
    return this.cartService.cartProducts;
  }

  get totalQuantity(): number {
    return this.cartService.totalQuantity;
  }

  get totalPrice(): number {
    return this.cartService.totalSum;
  }

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  onCartProductQuantityIncreased(cartProduct: CartProductModel) {
    this.cartService.increaseQuantity(cartProduct);
  }

  onCartProductQuantityDecreased(cartProduct: CartProductModel) {
    this.cartService.decreaseQuantity(cartProduct);
  }

  onCartProductRemoved(cartProduct: CartProductModel) {
    this.cartService.removeProduct(cartProduct);
  }
}
