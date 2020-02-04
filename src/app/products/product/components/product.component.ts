import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

import { ProductModel } from '../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush - not updating after change in rxjs subscription.
})
export class ProductComponent implements OnInit {
  @Input() product: ProductModel;

  @Output() productBought = new EventEmitter<ProductModel>();

  ngOnInit() {
  }

  onBuy() {
    this.productBought.emit(this.product);
  }
}
