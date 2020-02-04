import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { CartItemModel } from 'src/app/cart/cart-item/models/cart-item.model';
import { CartService } from 'src/app/cart/cart-list/services/cart.service';
import { ProductModel } from 'src/app/products/product/models/product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {
  cartItems: CartItemModel[] = [];

  private subscription: Subscription;

  get totalQuantity(): number {
    return this.cartService.getTotalQuantity(this.cartItems);
  }

  get totalPrice(): number {
    return this.cartService.getTotalPrice(this.cartItems);
  }

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
    const cartItem = this.cartItems.find(item => item.product.name === product.name);

    if (cartItem) {
      cartItem.quantity++;
    } else {
      this.cartItems.push(new CartItemModel(product, 1));
    }
  }
}
