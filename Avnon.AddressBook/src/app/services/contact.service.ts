import {Injectable} from '@angular/core';
import { Headers } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/toPromise';
import { Contact } from "../model/contact";
import { Tag } from "../model/tag";
import { ConfigService } from "config/config.service";

@Injectable()
export class ContactService {

  private contactUrl = this.configService.get('apiUrl') + '/contact';

  constructor(public authHttp: AuthHttp, private configService: ConfigService) { }

  getAllContacts(): Promise<Contact[]> {
    return this.authHttp.get(this.contactUrl)
      .toPromise()
      .then(res => {
        var result = res.json() as Contact[];
        this.cleanContacts(result);
        return result;
      })
      .catch(this.handleError);
  }

  findContacts(searchText: string): Promise<Contact[]> {
    return this.authHttp.get(this.contactUrl+'?searchText='+searchText)
      .toPromise()
      .then(res => {
        var result = res.json() as Contact[];
        this.cleanContacts(result);
        return result;
      })
      .catch(this.handleError);
  }

  getContactsByTag(tagId: number): Promise<Contact[]> {
    return this.authHttp.get(this.contactUrl + '/tag/' + tagId)
      .toPromise()
      .then(res => {
        var result = res.json() as Contact[];
        this.cleanContacts(result);
        return result;
      })
      .catch(this.handleError);
  }

 getContact(id: number): Promise<Contact> {
   return this.authHttp.get(this.contactUrl + '/' + id)
      .toPromise()
      .then(res => {
        var result = res.json() as Contact;
        this.cleanContact(result);
        return result;
      })
      .catch(this.handleError);
  }

  addTagToContact(contactId: number, tag: Tag): Promise<Tag> {
    return this.authHttp.put(this.contactUrl + '/' + contactId + '/tag/', tag)
      .toPromise()
      .then(res => {
        var result = res.json() as Tag;
        return result;
      })
      .catch(this.handleError);
 }

  removeTagFromContact(contactId: number, tagId: number) {
    return this.authHttp.delete(this.contactUrl + '/' + contactId + '/tag/' + tagId)
      .toPromise()
      .catch(this.handleError);
  }

 private cleanContacts(contacts: Contact[]) {
   for (var contact of contacts) {
     this.cleanContact(contact);
   }
 }

 private cleanContact(contact: Contact) {
   if (contact.tags === undefined || contact.tags === null) {
     contact.tags = [];
     return;
   }
   if (contact.tags.length === 1) {
     if (contact.tags[0] === null || contact.tags[0] === undefined) {
       contact.tags = [];
     }
   }
 }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}