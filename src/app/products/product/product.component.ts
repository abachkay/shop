import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { map } from 'rxjs/operators';

import { LocalStorageService } from './../../core/services/local-storage.service';
import { ProductsService } from './../services/products.service';
import { ProductModel } from '../models/product.model';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product: ProductModel;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private localStorageService: LocalStorageService,
    private cartService: CartService) {
  }

  ngOnInit() {
    const productId: number = +this.route.snapshot.params.productID;

    this.productsService.getProductById(productId).pipe(
      map(product => {
        const cartProducts = JSON.parse(this.localStorageService.getItem('cartProducts'));
        const cartProduct = cartProducts && cartProducts.find(x => +x.product.id === productId);

        if (cartProduct) {
          product.quantity -= cartProduct.quantity;
        }

        return product;
      })).subscribe((product: ProductModel) => { this.product = product; });
  }

  onBuy() {
    this.cartService.addProduct(this.product);
    this.product.quantity--;
  }
}
