import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'app/product/products-service';
import { ProductModel } from 'app/product/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: ProductModel[];

  constructor(productsService: ProductsService) {
    this.products = productsService.getProducts();
  }

  ngOnInit() {
  }

}
