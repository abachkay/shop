import { Injectable } from '@angular/core';

import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor() { }

  getProducts() {
    return [
      new ProductModel('Product1', 'Description2', 35.4325, 5, new Date(2020, 1, 1), 'Category1'),
      new ProductModel('Product2', 'Description3', 32.42, 12, new Date(2020, 1, 5), 'Category2'),
      new ProductModel('Product3', 'Description4', 65, 245, new Date(2020, 1, 9), 'Category1'),
    ];
  }
}
