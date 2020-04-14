import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminGuard } from './core/guards/admin.guard';
import { PathNotFoundComponent } from './layout/components/path-not-found/path-not-found.component';
import { AboutComponent } from './layout/components/about/about.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { CartListComponent } from './cart/components/cart-list/cart-list.component';
import { ProductComponent } from './products/product/product.component';
import { OrderComponent } from './orders/order.component';
import { LoginComponent } from './layout/components/login/login.component';
import { ProductsStatePreloadingGuard } from './products/guards/products-state-preloading.guard';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    canActivate: [ProductsStatePreloadingGuard],
    path: 'products-list',
    component: ProductListComponent
  },
  {
    canActivate: [ProductsStatePreloadingGuard],
    path: 'product/:productID',
    component: ProductComponent
  },
  {
    path: 'cart',
    component: CartListComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    canLoad: [AdminGuard],
    canActivate: [AdminGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: '',
    redirectTo: '/products-list',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PathNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
