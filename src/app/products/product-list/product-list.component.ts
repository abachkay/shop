import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { ProductModel } from '../models/product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Promise<ProductModel[]>;

  constructor(
    private productsService: ProductsService,
    private router: Router) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onSelectProduct(productId: number) {
    const link = ['/product', productId];
    this.router.navigate(link);
  }
}
