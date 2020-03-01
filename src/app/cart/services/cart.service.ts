import { Injectable } from '@angular/core';

import { ProductModel } from 'src/app/products/models/product.model';
import { CartProductModel } from '../models/cart-product.model';
import { LocalStorageService } from '../../core/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts: CartProductModel[];
  totalQuantity: number;
  totalSum: number;

  constructor(private localStorageService: LocalStorageService) {
    this.cartProducts = JSON.parse(localStorageService.getItem('cartProducts')) || [];
    this.updateCartData();
  }

  addProduct(product: ProductModel) {
    const cartProduct = this.getCartProductByName(product.name);

    if (cartProduct) {
      cartProduct.quantity++;
    } else {
      this.cartProducts.push(new CartProductModel({ ...product }, 1));
    }

    this.updateCartData();
  }

  removeProduct(name: string) {
    const cartProduct = this.getCartProductByName(name);

    this.cartProducts.splice(this.cartProducts.indexOf(cartProduct), 1);
    this.updateCartData();
  }

  increaseQuantity(name: string) {
    const cartProduct = this.getCartProductByName(name);

    cartProduct.quantity++;
    this.updateCartData();
  }

  decreaseQuantity(name: string) {
    const cartProduct = this.getCartProductByName(name);

    cartProduct.quantity--;

    if (cartProduct.quantity <= 0) {
      this.removeProduct(name);
    }

    this.updateCartData();
  }

  removeAllProducts() {
    this.cartProducts = [];
    this.updateCartData();
  }

  private updateCartData() {
    this.localStorageService.setItem('cartProducts', JSON.stringify(this.cartProducts));

    this.totalQuantity = this.cartProducts.reduce((accumulator, current) => accumulator + current.quantity, 0);
    this.totalSum = this.cartProducts.reduce((accumulator, current) => accumulator + current.product.price * current.quantity, 0);
  }

  private getCartProductByName(name: string): CartProductModel {
    return this.cartProducts.find(p => p.product.name === name);
  }
}
