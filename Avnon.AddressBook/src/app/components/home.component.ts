import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from "../model/contact";
import { Tag } from "../model/tag";
import { ContactService } from "../services/contact.service";
import { AuthService } from "../services/auth.service";

import 'rxjs/add/operator/debounceTime';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html',
  providers: [ContactService]
})
export class HomeComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService, private authService: AuthService, private router: Router) { }

  onDeleteTag(tagId: number) {
    for (var contact of this.contacts) {
      var index = contact.tags.findIndex(tag => tag.tagId === tagId);

      if (index > -1)
        contact.tags.splice(index, 1);
    }
  }

  onEditTag(tag: Tag) {
    for (var contact of this.contacts) {
      var tagToEdit = contact.tags.find(a => a.tagId === tag.tagId);
      if (tagToEdit) {
        tagToEdit.title = tag.title;
      }
    }
  }

  onSearch(searchText: string) {
    this.contactService.findContacts(searchText)
      .then(contacts => {
        this.contacts = contacts;
      });
  }

  onSearchByTag(tagId: number) {
    this.contactService.getContactsByTag(tagId)
      .then(contacts => {
        this.contacts = contacts;
      });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.contactService.getAllContacts()
      .then(contacts => {
        this.contacts = contacts;
      });
  }
}
