import { select, Store } from '@ngrx/store';
import { AppState } from './../../core/@ngrx/app.state';
import * as ProductsActions from './../../core/@ngrx/products/products.actions';

import { Observable } from 'rxjs';
import { tap, filter, take } from 'rxjs/operators';

import { selectProductsLoaded } from 'src/app/core/@ngrx/products/products.selectors';

export function checkStore(store: Store<AppState>): Observable<boolean> {
  return store.pipe(
    select(selectProductsLoaded),
    tap((loaded: boolean) => {
      if (!loaded) {
        store.dispatch(ProductsActions.getProducts());
      }
    }),
    filter((loaded: boolean) => loaded),
    take(1)
  );
}
