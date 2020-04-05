import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';

import { ProductModel } from '../../../products/models/product.model';

export interface ProductsState extends EntityState<ProductModel> {
  readonly loading: boolean;
  readonly loaded: boolean;
  readonly error: Error | string;
}

export const adapter: EntityAdapter<ProductModel> = createEntityAdapter<ProductModel>();

export const initialProductsState: ProductsState = adapter.getInitialState({
  loading: false,
  loaded: false,
  error: null
});
