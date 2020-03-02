import { Injectable } from '@angular/core';

import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn: boolean;
  isAdmin: boolean;

  constructor(
    private localStorageService: LocalStorageService) {
    this.isLoggedIn = this.localStorageService.getItem('isLoggedIn') === 'true';
    this.isAdmin = this.localStorageService.getItem('isAdmin') === 'true';
  }

  login(username: string, password: string): void {
    this.isLoggedIn = true;

    // TODO: delete this hardcode after connecting to a backend.
    if (username === 'admin' && password === 'admin') {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }

    this.localStorageService.setItem('isLoggedIn', this.isLoggedIn);
    this.localStorageService.setItem('isAdmin', this.isAdmin);
  }

  logout(): void {
    this.isLoggedIn = false;
    this.isAdmin = false;

    this.localStorageService.removeItem('isLoggedIn');
    this.localStorageService.removeItem('isAdmin');
  }
}
