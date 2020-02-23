import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { AboutComponent } from './layout/components/about/about.component';
import { SharedModule } from './shared/shared.module';
import { PathNotFoundComponent } from './layout/components/path-not-found/path-not-found.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PathNotFoundComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    ProductsModule,
    CartModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
