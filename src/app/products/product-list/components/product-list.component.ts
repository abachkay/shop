import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { ProductModel } from '../../product/models/product.model';
import { ProductsService } from '../../product/services/products.service';
import { CartService } from 'src/app/cart/cart-list/services/cart.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { CartProductModel } from 'src/app/cart/cart-item/models/cart-product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: ProductModel[];

  private subsciption: Subscription;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
    const cartProducts = JSON.parse(this.localStorageService.getItem('cartProducts'));

    if (cartProducts) {
      for (const cartProduct of cartProducts) {
        const product = this.products.find(p => p.name === cartProduct.product.name);

        if (product) {
          product.quantity -= cartProduct.quantity;
        }
      }
    }

    this.subsciption = this.cartService.cartProductsChannel$.subscribe(
      data => this.cartUpdatedHandler(data)
    );
  }

  ngOnDestroy() {
    this.subsciption.unsubscribe();
  }

  onProductBought(product: ProductModel) {
    this.cartService.addProduct(product);
  }

  private cartUpdatedHandler(cartProducts: CartProductModel[]) {
    for (const cartProduct of cartProducts) {
      const product = this.products.find(p => p.name === cartProduct.product.name);

      product.quantity = cartProduct.product.quantity - cartProduct.quantity;

      this.products.splice(this.products.indexOf(product), 1, { ...product });
    }
  }
}
// Думаю, что папка components тут лишняя, можно ее убрать
