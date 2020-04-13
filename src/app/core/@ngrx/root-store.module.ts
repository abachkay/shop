import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, RouterState } from '@ngrx/router-store';

import { environment } from '../../../environments/environment';
import { routerReducers } from './router/router.reducer';
import { RouterEffects } from './router/router.effects';
import { CustomSerializer } from './router/router.custom-serializer';
import { productsReducer } from './products/products.reducer';
import { ProductsEffects } from './products/products.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(routerReducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true
      }
    }),
    EffectsModule.forRoot([RouterEffects]),
    StoreModule.forFeature('products', productsReducer),
    EffectsModule.forFeature([ProductsEffects]),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: RouterState.Minimal,
      serializer: CustomSerializer
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ]
})
export class RootStoreModule { }
