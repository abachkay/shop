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
    private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onProductBought(product: ProductModel) {
    if (product.quantity) {
      this.cartService.addProduct(product);
      product.quantity--;
    }
  }
}
// Думаю, что папка components тут лишняя, можно ее убрать
