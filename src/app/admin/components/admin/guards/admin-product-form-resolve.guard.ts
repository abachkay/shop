import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ProductsService } from 'src/app/products/services/products.service';
import { ProductModel } from './../../../../products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class AdminProductFormResolveGuard implements Resolve<ProductModel> {
  constructor(
    private productsService: ProductsService,
    private router: Router
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
          this.router.navigate(['/admin/products']);
          return null;
        }
      }),
      catchError(() => {
        this.router.navigate(['/admin/products']);

        return of(null);
      })
    );
  }
}
