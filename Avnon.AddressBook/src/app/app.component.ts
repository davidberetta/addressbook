import { Component, OnInit } from '@angular/core';

import { Contact } from "./model/contact";
import { Tag } from "./model/tag";
import { ContactService } from "./services/contact.service";

import 'rxjs/add/operator/debounceTime';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [ContactService]
})
export class AppComponent {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) { }

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

  ngOnInit(): void {
    this.contactService.getAllContacts()
      .then(contacts => {
        this.contacts = contacts;
      });
  }
}
