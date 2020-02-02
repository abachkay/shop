import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { CartItemModel } from '../models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: CartItemModel;

  ngOnInit() {
  }

}
