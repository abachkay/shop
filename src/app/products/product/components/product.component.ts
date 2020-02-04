import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { ProductModel } from '../models/product.model';
import { CartService } from 'src/app/cart/cart-list/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  @Input() product: ProductModel;

  constructor(
    private cartService: CartService) { }

  ngOnInit() {
  }

  onBuy() {
    if (this.product.quantity) {
      this.cartService.addProduct(this.product);
      this.product.quantity--;
    }
  }
}
