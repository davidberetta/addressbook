import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';
import { ResponseDto } from "../model/responseDto";

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  user: User;
  errorMessages: string[];
  loading_fb: boolean;
  loading_lg: boolean;
  error: boolean;

  constructor(private router: Router, private auth: AuthService, private route: ActivatedRoute) {
    this.user = new User();
    this.errorMessages = [];
    this.error = false;
    this.loading_fb = false;
    this.loading_lg = false;
  }

  ngOnInit(): void {
    let provider: string = this.route.snapshot.params['provider'];
    if (provider) {
      this.fbLogin();
    }
  }

  fbDialog() {
    this.errorMessages = [];
    this.error = false;
    this.loading_fb = true;

    this.auth.fbDialogAuth();
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

  private fbLogin() {
    this.loading_fb = true;
    let authCode: string = this.route.snapshot.queryParams['code'];
    this.auth.fbLogin(authCode).then(response => {
      this.handleLoginResponse(response);
      this.loading_fb = false;
    });
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