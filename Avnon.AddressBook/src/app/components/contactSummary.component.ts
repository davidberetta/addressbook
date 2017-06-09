import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from "../model/contact";
import { Tag } from "../model/tag";

@Component({
  moduleId: module.id,
  selector: 'contact-summary',
  templateUrl: 'contactSummary.component.html',
  providers: [ContactService]
})

export class ContactSummaryComponent {
  @Output() onDeleteTag = new EventEmitter<number>();
  @Output() onEditTag = new EventEmitter<Tag>();
  @Input() contact: Contact;

  constructor(private contactService: ContactService) {
  }

  onTagDeleted(tagId: number) {
    this.onDeleteTag.emit(tagId);
  }

  onTagEdited(tag: Tag) {
    this.onEditTag.emit(tag);
  }

  onTagRemoved(tagId: number) {
    var tagIndex = this.contact.tags.findIndex(tag => tag.tagId === tagId);
    if (tagIndex > -1) {
      this.contact.tags.splice(tagIndex, 1);
    }
  }

  onTagAdded(tag: Tag) {
    this.contact.tags.push(tag);
  }
}