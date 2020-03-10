import { HttpService } from './../../shared/services/http.service';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { ProductModel } from '../models/product.model';

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

  upsertProduct(product: ProductModel) {
    product.dateModified = new Date(Date.now());

    if (product.id) {
      return this.httpService.put(productsUrl, product.id, product);
    }

    product.id = Math.trunc((Math.random() * 1000000));

    return this.httpService.post(productsUrl, product);
  }

  deleteProduct(productId: number) {
    return this.httpService.delete(productsUrl, productId);
  }
}

const productsUrl = 'products';
