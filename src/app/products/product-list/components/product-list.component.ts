import { LocalStorageService } from './../../../core/services/local-storage.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { ProductModel } from '../../product/models/product.model';
import { ProductsService } from '../../product/services/products.service';
import { CartService } from 'src/app/cart/cart-list/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: ProductModel[];

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
    const cartProducts = JSON.parse(this.localStorageService.getItem('cartProducts'))

    if (cartProducts) {
      for (const cartProduct of cartProducts) {
        const product = this.products.find(p => p.name === cartProduct.product.name);
        if (product) {
          product.quantity -= cartProduct.quantity;
        }
      }
    }
  }

  onProductBought(product: ProductModel) {
    this.cartService.addProduct(product);
  }
}
