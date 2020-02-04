import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { ProductModel } from '../../product/models/product.model';
import { ProductsService } from '../../product/services/products.service';
import { CartService } from 'src/app/cart/cart-list/services/cart.service';
import { CartItemModel } from 'src/app/cart/cart-item/models/cart-item.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: ProductModel[];
  private subscription: Subscription;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
    this.subscription = this.cartService.incrementQuantityChannel$.subscribe(data => this.productIncrementedHandler(data));
    this.subscription = this.cartService.decrementQuantityChannel$.subscribe(data => this.productDecrementedHandler(data));
    this.subscription = this.cartService.removeProductChannel$.subscribe(data => this.productRemovedHandler(data));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private productIncrementedHandler(productName: string): void {
    const product = this.products.find(item => item.name === productName);

    if (product) {
      product.quantity--;
    } else {
      throw new Error('Invalid cart operation: trying to add product to cart when there are no products left');
    }
  }
  private productDecrementedHandler(productName: string): void {
    const product = this.products.find(item => item.name === productName);

    product.quantity++;
  }
  private productRemovedHandler(cartItemModel: CartItemModel): void {
    const product = this.products.find(item => item.name === cartItemModel.product);

    product.quantity += cartItemModel.quantity;
  }
}
