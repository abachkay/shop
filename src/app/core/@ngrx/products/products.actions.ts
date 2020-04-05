import { createAction, props } from '@ngrx/store';

import { ProductModel } from '../../../products/models/product.model';

export const getProducts = createAction('[Products] Get Products');
export const getProductsSuccess = createAction('[Products] Get Products Success', props<{ products: ProductModel[] }>());
export const getProductsError = createAction('[Products] Get Products Error', props<{ error: Error | string }>());

export const updateProduct = createAction('[Products] Update Product', props<{ product: ProductModel }>());
export const updateProductSuccess = createAction('[Products] Update Product Success', props<{ product: ProductModel, isNew: boolean }>());
export const updateProductError = createAction('[Products] Update Product Error', props<{ error: Error | string }>());

export const deleteProduct = createAction('[Products] Delete Product', props<{ product: ProductModel }>());
export const deleteProductSuccess = createAction('[Products] Delete Product Success', props<{ product: ProductModel }>());
export const deleteProductError = createAction('[Products] Delete Product Error', props<{ error: Error | string }>());
