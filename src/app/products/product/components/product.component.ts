import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { ProductModel } from '../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
