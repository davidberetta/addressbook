import { tokenNotExpired, AuthHttp, JwtHelper } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { User } from '../model/user';
import { ResponseDto } from '../model/responseDto';
import 'rxjs/add/operator/toPromise';
import { ConfigService } from 'config/config.service';
import { PubNubAngular } from 'pubnub-angular2';

@Injectable()
export class AuthService {

  private accountUrl = this.config.get('apiUrl') + '/account';

  constructor(private http: Http,
    private authHttp: AuthHttp,
    private config: ConfigService,
    private jwt: JwtHelper,
    private pubnub: PubNubAngular
  ) { }

  loggedIn() {
    return tokenNotExpired(this.config.get('tokenName'));
  }

  logout(): void {
    localStorage.removeItem(this.config.get('tokenName'));
  }

  fbDialogAuth() {
    var dialogUri = 'https://www.facebook.com/v2.9/dialog/oauth?client_id=' +
      this.config.get('fbAppId') +
      '&redirect_uri=' +
      this.config.get('fbRedirectUri')
      '&response_type=code';

    window.location.href = dialogUri;
  }

  fbLogin(authCode:string): Promise<ResponseDto> {
    var q = this.accountUrl +
      '/loginFacebook?authCode=' +
      authCode +
      '&redirectUri=' +
      this.config.get('fbRedirectUri');

    return this.http.get(q).toPromise().then(response => {
      var data = response.json();
      return this.handleLoginResponse(data);
    });
  }

  getCurrentUser(): string {
    var username = this.getJwtClaim('name');
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

  getJwtClaim(claim: string): string {
    var token = localStorage.getItem(this.config.get('tokenName'));
    var decodedToken = this.jwt.decodeToken(token);
    var result = decodedToken[claim];
    return result;
  }

  initializePubNub() {
    this.pubnub.init({
      publishKey: this.getJwtClaim('pn_pub_key') || '',
      subscribeKey: this.getJwtClaim('pn_sub_key') || ''
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
          result.success = true;
        }
      }
    }
    return result;
  }
}