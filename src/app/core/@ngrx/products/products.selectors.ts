import { createFeatureSelector, createSelector } from '@ngrx/store';

import { adapter, ProductsState } from './products.state';
import { ProductModel } from 'src/app/products/models/product.model';
import { selectRouterState } from '../router/router.selectors';

export const selectProductsState = createFeatureSelector<ProductsState>('products');
export const { selectEntities: selectProductsEntities, selectAll: selectProductsData } = adapter.getSelectors(selectProductsState);
export const selectProductsError = createSelector(selectProductsState, (state: ProductsState) => state.error);
export const selectProductsLoaded = createSelector(selectProductsState, (state: ProductsState) => state.loaded);

export const selectSelectedProductByUrl = createSelector(selectProductsEntities, selectRouterState,
  (products, router): ProductModel => {
    const productID = router.state.params.productID;
    if (productID) {
      return products[productID] as ProductModel;
    } else {
      return new ProductModel(0, '', '', 0, 0, null, '');
    }
  }
);
