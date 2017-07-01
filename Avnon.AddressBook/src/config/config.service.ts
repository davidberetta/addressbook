import { Injectable } from "@angular/core/";
import { Http } from "@angular/http";
import { environment } from '../environments/environment';

@Injectable()
export class ConfigService {
  private _config: Object;
  private configName: string;

  constructor(private http: Http) {
    this.configName = 'appConfig.json';

    if(environment.production)
    {
      this.configName = 'appConfig.prod.json'
    }
  }

  load() {
    return new Promise((resolve) => {
      this.http.get(this.configName).toPromise()
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