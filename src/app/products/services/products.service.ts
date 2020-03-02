import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Observable<ProductModel[]>;

  constructor() {
    this.products = of([
      new ProductModel(1, 'Product1', 'Description2', 35.4325, 5, new Date(2020, 1, 1), 'Category1'),
      new ProductModel(2, 'Product2', 'Description3', 32.42, 12, new Date(2020, 1, 5), 'Category2'),
      new ProductModel(3, 'Product3', 'Description4', 65, 245, new Date(2020, 1, 9), 'Category1'),
    ]);
  }

  getProducts(): Observable<ProductModel[]> {
    return this.products;
  }

  getProductById(id: number): Observable<ProductModel> {
    return this.products.pipe(
      map(products => {
        const product = products.find(x => x.id === id);

        return { ...product };
      })
    );
  }

  upsertProduct(product: ProductModel) {
    this.products = this.products.pipe(
      map(products => {
        const existingProduct = products.find(x => x.id === product.id);

        product.dateModified = new Date(Date.now());

        if (existingProduct) {
          products.splice(products.indexOf(existingProduct), 1, { ...product });
        } else {
          product.id = products.reduce((acc, current) => current.id > acc.id ? current : acc).id + 1;
          product.quantity = 1;
          products.push({ ...product });
        }

        return products;
      }));
  }
}
