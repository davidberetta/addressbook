import { tokenNotExpired, AuthHttp, JwtHelper } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { User } from '../model/user';
import { ResponseDto } from '../model/responseDto';
import 'rxjs/add/operator/toPromise';
import { ConfigService } from 'config/config.service';
import { FacebookService, InitParams, LoginOptions, LoginResponse } from 'ngx-facebook';
import { PubNubAngular } from 'pubnub-angular2';

@Injectable()
export class AuthService {

  private accountUrl = this.config.get('apiUrl') + '/account';

  constructor(private http: Http,
    private authHttp: AuthHttp,
    private config: ConfigService,
    private fb: FacebookService,
    private jwt: JwtHelper,
    private pubnub: PubNubAngular
  ) {
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

      if (response.status == 'connected') {

        var q = this.accountUrl +
          '/loginFacebook?providerKey=' +
          response.authResponse.userID +
          '&accessToken=' +
          response.authResponse.accessToken;

        return this.http.get(q).toPromise().then(response => {
          var data = response.json();
          return this.handleLoginResponse(data);
        });
      }
      return {
        success: false,
        errors: ['Facebook Authentication Failed'],
        data: {}
      };
    });
  }

  getCurrentUser(): string {
    var username = this.getJwtClaim('username') as string;
    if (!username)
      return 'Anonymous';
    return username;
  }

  login(user: User): Promise<ResponseDto> {
    return this.http.post(this.accountUrl + '/login', user).toPromise().then(response => {
      var data = response.json();
      return this.handleLoginResponse(data);
    }).catch(e => { console.log(e) });
  }

  getJwtClaim(claim: string): Object {
    var token = localStorage.getItem(this.config.get('tokenName'));
    var decodedToken = this.jwt.decodeToken(token);
    var result = decodedToken[claim];
    return result;
  }

  private initializePubNub(token: string) {
    var decodedToken = this.jwt.decodeToken(token);
    this.pubnub.init({
      publishKey: decodedToken.pn_pub_key || '',
      subscribeKey: decodedToken.pn_sub_key || ''
    });
  }

  private handleLoginResponse(responseData: any): ResponseDto {

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
          this.initializePubNub(token);
          result.success = true;
        }
      }
    }
    return result;
  }
}