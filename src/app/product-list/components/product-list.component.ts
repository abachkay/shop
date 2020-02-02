import { Component, OnInit } from '@angular/core';

import { ProductModel } from '../../product/models/product.model';
import { ProductsService } from '../../product/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: ProductModel[];

  constructor(
    private productsService: ProductsService) {
  }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }
}
