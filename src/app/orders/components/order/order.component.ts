import { CartService } from 'src/app/cart/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  totalSum: number;

  constructor(
    private cartService: CartService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.totalSum = this.cartService.totalSum;
  }

  onConfirmOrder() {
    console.log(`You created an order for ${this.totalSum}`);

    this.cartService.removeAllProducts();
    this.router.navigate(['products-list']);
  }
}
