import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { CartService } from 'src/app/cart/cart-list/services/cart.service';
import { CartProductModel } from './../../cart-item/models/cart-product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {
  cartProducts: CartProductModel[];
  orderByField = 'product/name';
  isDesc = true;

  private subsciption: Subscription;

  get totalQuantity(): number {
    return this.cartService.totalQuantity;
  }

  get totalPrice(): number {
    return this.cartService.totalSum;
  }

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartProducts = this.cartService.cartProducts.filter(cartProduct => cartProduct.quantity);

    this.subsciption = this.cartService.cartProductsChannel$.subscribe(cartProducts =>
      this.cartProducts = cartProducts.filter(cartProduct => cartProduct.quantity).map(cartProduct => ({ ...cartProduct }))
    );
  }

  ngOnDestroy() {
    this.subsciption.unsubscribe();
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
}
