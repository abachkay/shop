import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { Observable, of } from 'rxjs';
import { concatMap, pluck, switchMap, map, catchError } from 'rxjs/operators';

import * as ProductsActions from './products.actions';
import * as RouterActions from '../router/router.actions';
import { ProductModel } from '../../../products/models/product.model';
import { ProductsService } from 'src/app/products/services/products.service';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions: Actions,
    private productsService: ProductsService
  ) { }

  getProducts: Observable<Action> = createEffect(() => this.actions
    .pipe(
      ofType(ProductsActions.getProducts),
      switchMap(() => this.productsService.getProducts()),
      map(products => ProductsActions.getProductsSuccess({ products })),
      catchError(error => of(ProductsActions.getProductsError(error)))
    ));

  upsertProduct: Observable<Action> = createEffect(() => this.actions
    .pipe(
      ofType(ProductsActions.upsertProduct),
      pluck('product'),
      concatMap((product) => this.productsService.upsertProduct(product)),
      map(upsertResult => ProductsActions.upsertProductSuccess(upsertResult)),
      catchError(error => of(ProductsActions.upsertProductError(error)))
    ));

  deleteProduct: Observable<Action> = createEffect(() =>
    this.actions.pipe(
      ofType(ProductsActions.deleteProduct),
      pluck('product'),
      concatMap((product) => this.productsService.deleteProduct(product)),
      map(upsertedProduct => ProductsActions.deleteProductSuccess({ product: (upsertedProduct as ProductModel) })),
      catchError(error => of(ProductsActions.deleteProductError(error))))
  );

  upsertDeleteProductSuccess: Observable<Action> = createEffect(() =>
    this.actions.pipe(
      ofType(ProductsActions.upsertProductSuccess, ProductsActions.deleteProductSuccess),
      map(() => RouterActions.go({ path: ['admin', 'products'] })))
  );
}
