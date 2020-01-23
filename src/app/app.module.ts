import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/components/first.component';
import { ProductComponent } from './product/components/product.component';
import { ProductListComponent } from './product-list/components/product-list.component';
import { ProductsService } from './product/services/products.service';
import { CartComponent } from './cart/components/cart.component';
import { AveragePipe } from './first/pipes/average.pipe';
import { CartItemComponent } from './cart-item/components/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    FirstComponent,
    ProductComponent,
    ProductListComponent,
    CartComponent,
    AveragePipe,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
