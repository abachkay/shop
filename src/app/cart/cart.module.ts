import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartListComponent } from './cart-list/components/cart-list.component';
import { CartItemComponent } from './cart-item/components/cart-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CartItemComponent, CartListComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [CartListComponent] // одного публичного достаточно
})
export class CartModule { }
