import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { CartItemModel } from 'src/app/cart/cart-item/models/cart-item.model';
import { CommunicatorService } from 'src/app/shared/services/communicator.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartListComponent implements OnInit, OnDestroy {
  cartItems: CartItemModel[];

  private subscription: Subscription;

  constructor(private communicatorService: CommunicatorService) { }

  ngOnInit() {
    this.subscription = this.communicatorService.channel$.subscribe(data => this.addItemToCart(data));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private addItemToCart(data: string): void {
    this.cartItems = this.cartItems || [];
    const cartItem = this.cartItems.find(item => item.product === data);

    if (cartItem) {
      cartItem.quantity++;
    } else {
      this.cartItems.push(new CartItemModel(data, 1));
    }
  }
}
