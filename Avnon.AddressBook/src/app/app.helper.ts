import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { PubNubAngular } from 'pubnub-angular2';
import { ConfigService } from "config/config.service";

export function AuthHttpServiceFactory(http: Http, options: RequestOptions, config: ConfigService) {

  var result = new AuthHttp(new AuthConfig(
      {
        tokenName: config.get("tokenName"),
        //tokenGetter: (() => localStorage.getItem(config.get("tokenName")))
      }
    ),
    http,
    options);

  return result;
}

export function PubNubServiceFactory(config: ConfigService) {
  var result = new PubNubAngular();

  var pubKey = config.get('pn_pubKey');
  var subKey = config.get('pn_subKey');

  result.init({
    publishKey: pubKey,
    subscribeKey: subKey
  });

  return result;
}