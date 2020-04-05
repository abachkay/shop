import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ProductModel } from '../models/product.model';
import { ProductsFacade } from 'src/app/core/@ngrx/products/products.facade';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Observable<readonly ProductModel[]>;

  constructor(
    private productsFacade: ProductsFacade) { }

  ngOnInit() {
    this.products = this.productsFacade.products;
  }
}
