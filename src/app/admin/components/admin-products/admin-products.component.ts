import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ProductModel } from 'src/app/products/models/product.model';
import { ProductsFacade } from 'src/app/core/@ngrx/products/products.facade';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products: Observable<readonly ProductModel[]>;

  constructor(
    private productsFacade: ProductsFacade) { }

  ngOnInit() {
    this.products = this.productsFacade.products;
  }
}
