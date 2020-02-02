import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartListComponent } from './cart-list/components/cart-list.component';
import { CartItemComponent } from './cart-item/components/cart-item.component';

@NgModule({
  declarations: [CartItemComponent, CartListComponent],
  imports: [
    CommonModule
  ],
  exports: [CartItemComponent, CartListComponent]
})
export class CartModule { }
