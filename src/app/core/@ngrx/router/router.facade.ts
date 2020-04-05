import { Injectable } from '@angular/core';
import { NavigationExtras } from '@angular/router';

import { Store } from '@ngrx/store';

import { AppState } from '../app.state';
import * as RouterActions from './../../../core/@ngrx/router/router.actions';

@Injectable({
    providedIn: 'root'
})
export class RouterFacade {
    constructor(
        private store: Store<AppState>) {
    }

    goTo(props: {
        path: any[];
        queryParams?: object;
        extras?: NavigationExtras;
    }) {
        this.store.dispatch(RouterActions.go(props));
    }
}
