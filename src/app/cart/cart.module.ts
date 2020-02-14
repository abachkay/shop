import { NgModule } from '@angular/core';

import { CartListComponent } from './cart-list/components/cart-list.component';
import { CartItemComponent } from './cart-item/components/cart-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CartItemComponent, CartListComponent],
  imports: [
    SharedModule
  ],
  exports: [CartListComponent]
})
export class CartModule { }
