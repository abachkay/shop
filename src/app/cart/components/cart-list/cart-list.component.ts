import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from 'src/app/cart/services/cart.service';
import { CartProductModel } from '../../models/cart-product.model';

@Component({
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cartProducts: CartProductModel[];
  orderByField = 'product/name';
  isDesc = true;

  get totalQuantity(): number {
    return this.cartService.totalQuantity;
  }

  get totalPrice(): number {
    return this.cartService.totalSum;
  }

  constructor(
    private cartService: CartService,
    private router: Router) { }

  ngOnInit() {
    this.cartProducts = this.cartService.cartProducts;
  }

  onCartProductQuantityIncreased(cartProduct: CartProductModel) {
    this.cartService.increaseQuantity(cartProduct.product.name);
  }

  onCartProductQuantityDecreased(cartProduct: CartProductModel) {
    this.cartService.decreaseQuantity(cartProduct.product.name);
  }

  onCartProductRemoved(cartProduct: CartProductModel) {
    this.cartService.removeProduct(cartProduct.product.name);
  }

  onGoToOrder() {
    this.router.navigateByUrl('/order');
  }
}
