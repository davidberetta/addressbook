import { Component, OnInit, Input, Output, ElementRef, EventEmitter } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { TagService } from '../services/tag.service';
import { Tag } from "../model/tag";
import { PubNubAngular } from 'pubnub-angular2';

@Component({
  moduleId: module.id,
  selector: 'tag-control',
  templateUrl: 'tagControl.component.html',
  providers: [ContactService, TagService],
  host: { '(document:click)': 'onClick($event)'},
})
export class TagControlComponent {
  @Output() onTagDeleted = new EventEmitter<number>();
  @Output() onTagRemoved = new EventEmitter<number>();
  @Output() onTagAdded = new EventEmitter<Tag>();
  @Output() onTagEdited = new EventEmitter<Tag>();
  @Input() contactId: number;
  @Input() selectedTags: Tag[];
  tags: Tag[];
  newTagText: string;
  tagsLoaded: boolean = false;
  showDropDown: boolean = false;

  constructor(private contactService: ContactService, private tagService: TagService, private _eref: ElementRef, private pubNub: PubNubAngular) { }

  onClick(event: Event) {
    if ((event.target as Element).id.startsWith("tagops_"))
      return;

    if (!this._eref.nativeElement.contains(event.target)) {
      this.showDropDown = false;
    }
  }

  tagCheckChange(tagId: number) {
    var tag = this.tags.find(a => a.tagId === tagId);

    if (tag == null || tag == undefined)
      return;

    if (tag.selected) {
      this.contactService.addTagToContact(this.contactId, tag);
      this.onTagAdded.emit(tag);
     
    } else {
      this.contactService.removeTagFromContact(this.contactId, tagId);
      this.onTagRemoved.emit(tagId);
    }

  }

  getTags() {
    this.showDropDown = true;
    this.tagService.getAllTags().then(tags => {
        for (var tag of tags) {
          var selectedTag = this.selectedTags && this.selectedTags.length > 0 ? this.selectedTags.find(o => o.tagId === tag.tagId) : undefined;
          tag.editing = false;
          if (selectedTag) {
            tag.selected = true;
          } else
            tag.selected = false;
        }

        this.tags = tags;
        this.tagsLoaded = true;
      }
    );
  }

  addTag(title: string) {
    this.newTagText = '';
    var tagToAdd = { tagId: 0, title: title } as Tag;
    this.contactService.addTagToContact(this.contactId,tagToAdd).then(tag => {
      tag.selected = true;
      this.tags.push(tag);
      this.onTagAdded.emit(tag);

      this.pubNub.publish({ channel: 'newTagChannel', message: 'New Tag: '+title }, response => {
        console.log(response);
      });

    });
  }

  toggleEdit(id: number) {
    var tag = this.tags.find(tag => tag.tagId == id);
    var isEditing = tag.editing;

    this.tags.forEach(a => {
      a.editing = false;
    });
 
    tag.editing = !isEditing;
  }

  editTag(tag: Tag) {
    tag.editing = false;
    this.tagService.editTag(tag).then(a => {
        this.onTagEdited.emit(tag);
      }
    );
  }

  deleteTag(id: number) {
    var index = this.tags.findIndex(tag => tag.tagId == id);
    this.tags.splice(index, 1);
    this.tagService.deleteTag(id).then(a => {
        this.onTagDeleted.emit(id);
      }
    );
  }

}

interface Array<T> {
  find(predicate: (search: T) => boolean): T;
}