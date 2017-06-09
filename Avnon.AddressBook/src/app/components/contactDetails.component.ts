import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { Contact } from "../model/contact";
import { Subscription } from "rxjs/Subscription";

@Component({
  moduleId: module.id,
  selector: 'contact-details',
  templateUrl: 'contactDetails.component.html',
  providers: [ContactService]
})

export class ContactDetailsComponent {
  contact: Contact;
  isReady: boolean = false;
  private route$: Subscription;

  constructor(private route: ActivatedRoute, private contactService: ContactService) {

    this.route.params.subscribe(
      (params: Params) => {
        var id = +params["id"]; // cast to number
        if(!isNaN(id))
        {
          this.contactService.getContact(id).then(contact => {
          this.contact = contact;
          this.isReady = true;
          });
        }
      }
    );

  }

}