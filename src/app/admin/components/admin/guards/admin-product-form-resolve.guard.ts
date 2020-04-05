import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ProductsService } from 'src/app/products/services/products.service';
import { ProductModel } from './../../../../products/models/product.model';
import { RouterFacade } from 'src/app/core/@ngrx/router/router.facade';

@Injectable({
  providedIn: 'root'
})
export class AdminProductFormResolveGuard implements Resolve<ProductModel> {
  constructor(
    private productsService: ProductsService,
    private routerFacade: RouterFacade
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<ProductModel | null> {
    if (!route.paramMap.has('productID')) {
      return of(new ProductModel(null, '', '', null, null, null, ''));
    }

    const id = +route.paramMap.get('productID');

    return this.productsService.getProductById(id).pipe(
      map((product) => {
        if (product) {
          return product;
        } else {
          this.routerFacade.goTo({ path: ['/admin/products'] });
          return null;
        }
      }),
      catchError(() => {
        this.routerFacade.goTo({ path: ['/admin/products'] });

        return of(null);
      })
    );
  }
}
