import { OrdersModule } from './orders/orders.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { AboutComponent } from './layout/components/about/about.component';
import { SharedModule } from './shared/shared.module';
import { PathNotFoundComponent } from './layout/components/path-not-found/path-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './admin/components/admin/admin.component';
import { AdminProductsComponent } from './admin/components/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/components/admin-orders/admin-orders.component';
import { AdminProductFormComponent } from './admin/components/admin-product-form/admin-product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PathNotFoundComponent,
    AdminComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    AdminProductFormComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    ProductsModule,
    CartModule,
    OrdersModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
