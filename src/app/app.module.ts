import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { OrdersModule } from './orders/orders.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { AboutComponent } from './layout/components/about/about.component';
import { SharedModule } from './shared/shared.module';
import { PathNotFoundComponent } from './layout/components/path-not-found/path-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './layout/components/login/login.component';
import { TimingInterceptor } from './core/interceptors/timing-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PathNotFoundComponent,
    LoginComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    ProductsModule,
    CartModule,
    OrdersModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TimingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    const replacer = (key: string, value: any): string =>
      typeof value === 'function' ? value.name : value;

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
