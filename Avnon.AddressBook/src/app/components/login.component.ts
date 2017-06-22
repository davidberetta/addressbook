import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';
import { ResponseDto } from "../model/responseDto";

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  user: User;
  errorMessages: string[];
  loading_fb: boolean;
  loading_lg: boolean;
  error: boolean;

  constructor(private router: Router, private auth: AuthService) {
    this.user = new User();
    this.errorMessages = [];
    this.error = false;
    this.loading_fb = false;
    this.loading_lg = false;
  }

  fbLogin() {
    this.errorMessages = [];
    this.error = false;
    this.loading_fb = true;

    this.auth.loginFacebook().then(response => {
      this.handleLoginResponse(response);
      this.loading_fb = false;
    });
  }

  login() {
    this.errorMessages = [];
    this.error = false;
    this.loading_lg = true;

    if (this.validateUser(this.user, this.errorMessages)) {
      this.auth.login(this.user).then(response => {
        this.handleLoginResponse(response);
        this.loading_lg = false;
      });
    } else {
      this.error = true;
      this.loading_lg = false;
    }
  }

  private handleLoginResponse(response: ResponseDto) {
    if (response.success) {
      this.router.navigate(['/']);
    } else {
      if (response.errors.length > 0) {
        this.error = true;
        this.errorMessages = response.errors;
      }
    }
  }

  private validateUser(user: User, errors: string[]): boolean {
    var valid = true;
    if (!user.username) {
      errors.push("Username is required")
      valid = false;
    }
    if (!user.password) {
      errors.push("Password is required")
      valid = false;
    }
    return valid;
  }
}