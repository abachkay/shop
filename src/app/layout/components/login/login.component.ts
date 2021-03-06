import { Component, OnInit } from '@angular/core';

import { UserService } from './../../../core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn: boolean;
  isAdmin: boolean;
  username: string;
  password: string;

  constructor(
    private userService: UserService) { }

  ngOnInit() {
    this.getUserFromUserService();
  }

  onLogin() {
    this.userService.login(this.username, this.password).then(_ =>
      this.getUserFromUserService());
  }

  onLogout() {
    this.userService.logout();
    this.getUserFromUserService();
  }

  private getUserFromUserService() {
    this.isLoggedIn = this.userService.isLoggedIn;
    this.isAdmin = this.userService.isAdmin;
  }
}
