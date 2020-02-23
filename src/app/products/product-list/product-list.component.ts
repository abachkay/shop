import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { ProductModel } from '../models/product.model';
import { ProductsService } from '../services/products.service';
import { CartService } from 'src/app/cart/services/cart.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { CartProductModel } from 'src/app/cart/models/cart-product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Promise<ProductModel[]>;

  private subsciption: Subscription;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts().then(products => {
      const cartProducts = JSON.parse(this.localStorageService.getItem('cartProducts'));

      if (cartProducts) {
        for (const cartProduct of cartProducts) {
          const product = products.find(p => p.name === cartProduct.product.name);

          if (product) {
            product.quantity -= cartProduct.quantity;
          }
        }
      }

      this.subsciption = this.cartService.cartProductsChannel$.subscribe(
        data => this.cartUpdatedHandler(data)
      );

      return products;
    });
  }

  ngOnDestroy() {
    this.subsciption.unsubscribe();
  }

  onProductBought(product: ProductModel) {
    this.cartService.addProduct(product);
  }

  private cartUpdatedHandler(cartProducts: CartProductModel[]) {
    this.products = this.products.then(products => {
      for (const cartProduct of cartProducts) {
        const product = products.find(p => p.name === cartProduct.product.name);

        product.quantity = cartProduct.product.quantity - cartProduct.quantity;

        products.splice(products.indexOf(product), 1, { ...product });
      }

      return products;
    });
  }
}
