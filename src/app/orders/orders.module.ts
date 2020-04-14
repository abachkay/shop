import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { OrderComponent } from './order.component';

@NgModule({
  declarations: [OrderComponent],
  imports: [
    SharedModule
  ],
  exports: [OrderComponent]
})
export class OrdersModule { }
