import { Action, createReducer, on } from '@ngrx/store';

import { adapter, ProductsState, initialProductsState } from './products.state';
import * as ProductsActions from './products.actions';

const reducer = createReducer(
  initialProductsState,

  on(ProductsActions.getProducts, state => ({ ...state, loading: true })),
  on(ProductsActions.getProductsSuccess, (state, { products: products }) =>
    adapter.addAll(products, { ...state, loading: false, loaded: true })),
  on(ProductsActions.getProductsError, (state, { error }) => ({ ...state, loading: false, loaded: false, error })),

  on(ProductsActions.updateProduct, state => ({ ...state })),
  on(ProductsActions.updateProductSuccess, (state, { product, isNew }) => isNew
    ? adapter.addOne(product, state)
    : adapter.updateOne({ id: product.id, changes: product }, state)),
  on(ProductsActions.updateProductError, ProductsActions.deleteProductError, (state, { error }) => ({ ...state, error })),

  on(ProductsActions.deleteProduct, state => ({ ...state })),
  on(ProductsActions.deleteProductSuccess, (state, { product }) => adapter.removeOne(product.id, state))
);

export function productsReducer(state: ProductsState | undefined, action: Action) {
  return reducer(state, action);
}
