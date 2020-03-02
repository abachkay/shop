import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';

import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanLoad {
  constructor(
    private userService: UserService,
    private router: Router) { }

  canActivate(): | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLogin();
  }

  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLogin() as boolean;
  }

  private checkLogin(): boolean | UrlTree {
    if (this.userService.isAdmin) {
      return true;
    }

    this.router.navigate(['/login']);

    return false;
  }
}
