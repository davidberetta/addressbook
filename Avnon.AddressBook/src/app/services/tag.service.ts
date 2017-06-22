import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/toPromise';
import { Tag } from "../model/tag";
import { ConfigService } from "config/config.service";

@Injectable()
export class TagService {

  private tagUrl = this.configService.get('apiUrl') + '/tag';

  constructor(public authHttp: AuthHttp, private configService:ConfigService) { }

  getAllTags(): Promise<Tag[]> {
    return this.authHttp.get(this.tagUrl)
      .toPromise()
      .then(res => {
        var result = res.json() as Tag[];
        return result;
      })
      .catch(this.handleError);
  }

  findTags(searchText: string): Promise<Tag[]> {
    return this.authHttp.get(this.tagUrl + '?title=' + searchText)
      .toPromise()
      .then(res => {
        var result = res.json() as Tag[];
        return result;
      })
      .catch(this.handleError);
  }

  addTag(tag: Tag): Promise<Tag> {
    return this.authHttp.put(this.tagUrl,tag)
      .toPromise()
      .then(res => {
        var result = res.json() as Tag;
        return result;
      })
      .catch(this.handleError);
  }

  editTag(tag: Tag) {
    return this.authHttp.post(this.tagUrl, tag)
      .toPromise()
      .catch(this.handleError);
  }

  deleteTag(id: number) {
    return this.authHttp.delete(this.tagUrl + '/' + id)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}