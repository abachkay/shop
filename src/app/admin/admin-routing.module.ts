import { AdminGuard } from './../core/guards/admin.guard';
import { AdminProductFormResolveGuard } from './components/admin/guards/admin-product-form-resolve.guard';
import { NgModule } from '@angular/core';

import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminComponent } from './components/admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductFormComponent } from './components/admin-product-form/admin-product-form.component';

const routes: Routes = [{
  path: 'admin',
  canActivate: [AdminGuard],
  component: AdminComponent,
  children: [
    { path: '', redirectTo: '/admin/products', pathMatch: 'full' },
    { path: 'products', component: AdminProductsComponent },
    { path: 'product/add', component: AdminProductFormComponent },
    {
      path: 'product/edit/:productID',
      component: AdminProductFormComponent,
      resolve: {
        product: AdminProductFormResolveGuard
      }
    },
    { path: 'orders', component: AdminOrdersComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
