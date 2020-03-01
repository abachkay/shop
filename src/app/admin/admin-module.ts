import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminProductFormComponent } from './components/admin-product-form/admin-product-form.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { NgModule } from '@angular/core';

import { AdminComponent } from './components/admin/admin.component';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [AdminComponent, AdminOrdersComponent, AdminProductFormComponent, AdminProductsComponent],
  imports: [SharedModule, AdminRoutingModule],
  exports: [AdminComponent, AdminRoutingModule]
})
export class AdminModule { }
