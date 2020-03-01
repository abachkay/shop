import { Component, OnInit } from '@angular/core';

import { ProductModel } from '../models/product.model';
import { ProductsService } from '../services/products.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Promise<ProductModel[]>;

  constructor(
    private productsService: ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }
}
