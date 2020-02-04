import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { CartItemModel } from 'src/app/cart/cart-item/models/cart-item.model';
import { CartService } from 'src/app/cart/cart-list/services/cart.service';
import { ProductModel } from 'src/app/products/product/models/product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartListComponent implements OnInit, OnDestroy {
  cartItems: CartItemModel[];

  private subscription: Subscription;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.subscription = this.cartService.addProductChannel$.subscribe(product => this.productBoughtHandler(product));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onItemDeleted(cartItem: CartItemModel) {
    this.cartItems.splice(this.cartItems.indexOf(cartItem), 1);

  }

  private productBoughtHandler(product: ProductModel): void {
    this.cartItems = this.cartItems || [];
    const cartItem = this.cartItems.find(item => item.product === product.name);

    if (cartItem) {
      cartItem.quantity++;
    } else {
      this.cartItems.push(new CartItemModel(product.name, 1, product.quantity));
    }
  }
}
