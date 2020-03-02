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
