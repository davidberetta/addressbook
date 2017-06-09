import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Tag } from "../model/tag";

@Injectable()
export class TagService {

  private tagUrl = 'http://localhost:50797/api/tag';

  constructor(private http: Http) { }

  getAllTags(): Promise<Tag[]> {
    return this.http.get(this.tagUrl)
      .toPromise()
      .then(res => {
        var result = res.json() as Tag[];
        return result;
      })
      .catch(this.handleError);
  }

  findTags(searchText: string): Promise<Tag[]> {
    return this.http.get(this.tagUrl + '?title=' + searchText)
      .toPromise()
      .then(res => {
        var result = res.json() as Tag[];
        return result;
      })
      .catch(this.handleError);
  }

  addTag(tag: Tag): Promise<Tag> {
    return this.http.put(this.tagUrl,tag)
      .toPromise()
      .then(res => {
        var result = res.json() as Tag;
        return result;
      })
      .catch(this.handleError);
  }

  editTag(tag: Tag) {
    return this.http.post(this.tagUrl, tag)
      .toPromise()
      .catch(this.handleError);
  }

  deleteTag(id: number) {
    return this.http.delete(this.tagUrl+'/'+id)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}