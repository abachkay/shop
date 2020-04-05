import { Injectable } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import { ProductModel } from 'src/app/products/models/product.model';
import { AppState } from '../app.state';
import { selectProductsData, selectProductsError, getProductByUrl } from './products.selectors';
import * as ProductsActions from './products.actions';

@Injectable({
  providedIn: 'root'
})
export class ProductsFacade {
  products: Observable<ReadonlyArray<ProductModel>>;
  productsError: Observable<Error | string>;
  selectedProductByUrl: Observable<ProductModel>;

  constructor(private store: Store<AppState>) {
    this.products = this.store.pipe(select(selectProductsData));
    this.productsError = this.store.pipe(select(selectProductsError));
    this.selectedProductByUrl = this.store.pipe(select(getProductByUrl));
  }

  upsertProduct(props: { product: ProductModel }) {
    this.store.dispatch(ProductsActions.upsertProduct(props));
  }

  deleteProduct(props: { product: ProductModel }) {
    this.store.dispatch(ProductsActions.deleteProduct(props));
  }
}
