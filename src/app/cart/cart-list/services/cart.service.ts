import { LocalStorageService } from './../../../core/services/local-storage.service';
import { Injectable } from '@angular/core';

import { ProductModel } from 'src/app/products/product/models/product.model';
import { CartProductModel } from '../../cart-item/models/cart-product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts: CartProductModel[];
  totalQuantity: number;
  totalSum: number;

  constructor(private localStorageService: LocalStorageService) {
    this.cartProducts = JSON.parse(localStorageService.getItem('cartProducts')) || [];
  }

  addProduct(product: ProductModel) {
    product.quantity--;

    const cartProduct = this.cartProducts.find(
      item => item.product.name === product.name
    );

    if (cartProduct) {
      cartProduct.quantity++;
    } else {
      this.cartProducts.push(new CartProductModel(product, 1));
    }

    this.updateCartData();
  }

  removeProduct(cartProduct: CartProductModel) {
    this.cartProducts.splice(this.cartProducts.indexOf(cartProduct), 1);
    cartProduct.product.quantity += cartProduct.quantity;

    this.updateCartData();
  }

  increaseQuantity(cartProduct: CartProductModel) {
    cartProduct.product.quantity--;
    cartProduct.quantity++;

    this.updateCartData();
  }

  decreaseQuantity(cartProduct: CartProductModel) {
    cartProduct.product.quantity++;
    cartProduct.quantity--;

    if (cartProduct.quantity <= 0) {
      this.removeProduct(cartProduct);
    }

    this.updateCartData();
  }

  removeAllProducts() {
    this.cartProducts = [];

    this.updateCartData();
  }

  updateCartData() {
    this.localStorageService.setItem('cartProducts', JSON.stringify(this.cartProducts));

    this.totalQuantity = this.cartProducts.reduce(
      (accumulator, current) => accumulator + current.quantity,
      0
    );
    this.totalSum = this.cartProducts.reduce(
      (accumulator, current) =>
        accumulator + current.product.price * current.quantity,
      0
    );
  }
}
