import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { ProductModel } from '../models/product.model';
import { CommunicatorService } from 'src/app/shared/services/communicator.service';
import { CartItemModel } from 'src/app/cart/cart-item/models/cart-item.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  @Input() product: ProductModel;

  constructor(
    private communicatorService: CommunicatorService) { }

  ngOnInit() {
  }

  onBuy() {
    this.product.quantity--;
    console.log(`You bought ${this.product.name}`);
    this.communicatorService.publishData(this.product.name);
  }
}
