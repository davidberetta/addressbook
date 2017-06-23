import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { PubNubAngular } from 'pubnub-angular2';
import { ConfigService } from "config/config.service";

export function AuthHttpServiceFactory(http: Http, options: RequestOptions, config: ConfigService) {
  return  new AuthHttp(new AuthConfig(
      {
        tokenName: config.get("tokenName"),
        //tokenGetter: (() => localStorage.getItem(config.get("tokenName")))
      }
    ),
    http,
    options);
}