import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'admin',
  component: AdminComponent,
  children: [
    { path: 'products', component: AdminProductsComponent },
    { path: 'orders', component: AdminOrdersComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
  static components = [
    AdminComponent,
    AdminProductsComponent,
    AdminOrdersComponent
  ];
}
