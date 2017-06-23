import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from "../model/contact";
import { Tag } from "../model/tag";
import { User } from "../model/user";
import { ContactService } from "../services/contact.service";
import { AuthService } from "../services/auth.service";
import { PubNubAngular } from 'pubnub-angular2';
import 'rxjs/add/operator/debounceTime';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html',
  providers: [ContactService]
})
export class HomeComponent implements OnInit {
  contacts: Contact[] = [];
  notifications: string[];
  showNotifications: boolean;
  currentUser: string;

  constructor(private contactService: ContactService,
    private authService: AuthService,
    private router: Router,
    private pubnub: PubNubAngular) {

    this.notifications = [];
    this.showNotifications = false;

    this.authService.initializePubNub();
  }

  ngOnInit(): void {
    this.contactService.getAllContacts()
      .then(contacts => {
        this.contacts = contacts;
      });

    this.currentUser = this.authService.getCurrentUser();

    this.pubnub.subscribe({
      channels: ['newTagChannel'], 
    });

    this.pubnub.addListener({
      message: m => {
        this.notifications.push(m.message);
      }
    });
  }

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

  removeNotification(notification: string) {
    var index = this.notifications.findIndex(n => n == notification);
    this.notifications.splice(index, 1);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
