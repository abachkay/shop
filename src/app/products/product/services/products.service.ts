import { Injectable } from '@angular/core';

import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor() { }

  getProducts() {
    return [
      new ProductModel('Product1', 'Description1', 44, 3),
      new ProductModel('Product2', 'Description2', 35, 2),
      new ProductModel('Product3', 'Description3', 32, 5),
      new ProductModel('Product4', 'Description4', 65, 245),
    ];
  }
}
