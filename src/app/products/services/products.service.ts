import { HttpService } from './../../shared/services/http.service';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { ProductModel } from '../models/product.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(
    private httpService: HttpService) { }

  getProducts(): Observable<ProductModel[]> {
    return this.httpService.get(productsUrl);
  }

  getProductById(id: number): Observable<ProductModel> {
    return this.httpService.getById(productsUrl, id);
  }

  upsertProduct(product: ProductModel): Observable<{ product: ProductModel, isNew: boolean }> {
    product = { ...product };
    product.dateModified = new Date(Date.now());

    if (product.id) {
      return this.httpService.put(productsUrl, product.id, product).pipe(
        map(updatedProduct => ({ product: (updatedProduct as ProductModel), isNew: false })));
    }

    product.id = Math.trunc((Math.random() * 1000000));

    return this.httpService.post(productsUrl, product).pipe(
      map(createdProduct => ({ product: (createdProduct as ProductModel), isNew: true })));
  }

  deleteProduct(product: ProductModel): Observable<ProductModel> {
    // Return product that was deleted, because HttpClient does not do that.
    return this.httpService.delete(productsUrl, product.id).pipe(map(() => product));
  }
}

const productsUrl = 'products';
