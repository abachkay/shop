import { Injectable } from '@angular/core';

import { HttpService } from './../../shared/services/http.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn: boolean;
  isAdmin: boolean;

  constructor(
    private localStorageService: LocalStorageService,
    private httpService: HttpService) {
    this.isLoggedIn = this.localStorageService.getItem('isLoggedIn') === 'true';
    this.isAdmin = this.localStorageService.getItem('isAdmin') === 'true';
  }

  login(username: string, password: string): Promise<any> {
    return this.httpService.get('users').toPromise()
      .then(result => {
        const user = (result as any[]).find(x => x.username === username && x.password === password);

        if (user) {
          this.isLoggedIn = true;
          this.isAdmin = user.isAdmin;
        } else {
          this.isLoggedIn = this.isAdmin = false;
          alert('Invalid username or password');
        }

        this.localStorageService.setItem('isLoggedIn', this.isLoggedIn);
        this.localStorageService.setItem('isAdmin', this.isAdmin);
      });
  }

  logout(): void {
    this.isLoggedIn = false;
    this.isAdmin = false;

    this.localStorageService.removeItem('isLoggedIn');
    this.localStorageService.removeItem('isAdmin');
  }
}
