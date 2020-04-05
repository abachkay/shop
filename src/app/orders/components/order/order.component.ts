import { Component, OnInit } from '@angular/core';

import { CartService } from 'src/app/cart/services/cart.service';
import { RouterFacade } from 'src/app/core/@ngrx/router/router.facade';

@Component({
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  totalSum: number;

  constructor(
    private cartService: CartService,
    private routerFacade: RouterFacade
  ) {
  }

  ngOnInit() {
    this.totalSum = this.cartService.totalSum;
  }

  onConfirmOrder() {
    console.log(`You created an order for ${this.totalSum}`);

    this.cartService.removeAllProducts();
    this.routerFacade.goTo({ path: ['products-list'] });
  }
}
