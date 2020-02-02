import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './product/components/product.component';
import { ProductListComponent } from './product-list/components/product-list.component';

@NgModule({
  declarations: [ProductComponent, ProductListComponent],
  imports: [
    CommonModule
  ],
  exports: [ProductComponent, ProductListComponent]
})
export class ProductsModule { }
