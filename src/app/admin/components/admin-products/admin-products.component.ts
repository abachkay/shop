import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ProductModel } from 'src/app/products/models/product.model';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products: Observable<ProductModel[]>;

  constructor(
    private productsService: ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }
}
