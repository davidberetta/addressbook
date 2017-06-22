import { tokenNotExpired, AuthHttp } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { User } from '../model/user';
import { ResponseDto } from '../model/responseDto';

import 'rxjs/add/operator/toPromise';
import { ConfigService } from "config/config.service";
import { FacebookService, InitParams, LoginOptions, LoginResponse } from "ngx-facebook";

@Injectable()
export class AuthService {

  private accountUrl = this.config.get('apiUrl') + '/account';

  constructor(private http: Http, private authHttp: AuthHttp, private config: ConfigService, private fb: FacebookService) {
    let fbParams: InitParams = {
      appId: this.config.get('appId'),
      version: 'v2.6',
      cookie: true,
      xfbml: true,
    };

    this.fb.init(fbParams);

  }

  loggedIn() {
    return tokenNotExpired(this.config.get('tokenName'));
  }

  logout(): void {
    localStorage.removeItem(this.config.get('tokenName'));
    localStorage.removeItem('currentUser');
    this.fb.logout();
  }

  loginFacebook(): Promise<ResponseDto> {

    let loginOptions: LoginOptions = {
      scope: 'email,public_profile',
    };

    return this.fb.login(loginOptions).then(response => {

      if (response.status == "connected") {

        var q = this.accountUrl +
          '/loginFacebook?providerKey=' +
          response.authResponse.userID +
          '&accessToken=' +
          response.authResponse.accessToken;

        return this.http.get(q).toPromise().then(response => {
          var data = response.json();
          return this.getResultFromLoginResponse(data);
        });
      }
      return {
        success: false,
        errors: ["Facebook Authentication Failed"],
        data: {}
      };
    });

  }

  getCurrentUser():string {
    var res = localStorage.getItem('currentUser');
    return res;
  }

  login(user: User): Promise<ResponseDto> {
    return this.http.post(this.accountUrl + '/login', user).toPromise().then(response => {
      var data = response.json();
      return this.getResultFromLoginResponse(data);
    }).catch(e => { console.log(e) });
  }

  private getResultFromLoginResponse(responseData: any): ResponseDto {

    var result = {
      success: false,
      errors: [],
      data: {}
    };

    if (responseData) {
      if (responseData.errors && responseData.errors.length > 0) {
        result.errors = responseData.errors;
      } else {

        var token = responseData.token;

        if (token) {
          localStorage.setItem(this.config.get('tokenName'), token);
          localStorage.setItem('currentUser', responseData.username);

          result.success = true;
        }
      }
    }
    return result;
  }
}