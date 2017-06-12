import { Injectable } from "@angular/core/";
import { Http } from "@angular/http";

@Injectable()
export class ConfigService {
  private _config: Object;

  constructor(private http: Http) {
  }

  load() {
    return new Promise((resolve) => {
      this.http.get('appConfig.json').toPromise()
        .then(config => {
          this._config = config.json();
          resolve();
        });
    });
  }

  get(key: any) {
    return this._config[key];
  }
}

export function ConfigLoader(configService: ConfigService) {
  return () => configService.load();
}