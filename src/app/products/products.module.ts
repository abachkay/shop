import { NgModule } from '@angular/core';

import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProductComponent, ProductListComponent],
  imports: [SharedModule],
  exports: [ProductListComponent]
})
export class ProductsModule { }

/*
Я бы структуру папки products сделал такой
products
  components
    product
    product-list
  services
    products.service.ts
  models
    product.model.ts
*/
