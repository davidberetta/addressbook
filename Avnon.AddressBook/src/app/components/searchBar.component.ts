import { Component, OnInit, Input, Output, ElementRef, EventEmitter } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { TagService } from '../services/tag.service';
import { Tag } from "../model/tag";

@Component({
  moduleId: module.id,
  selector: 'search-bar',
  templateUrl: 'searchBar.component.html',
  providers: [ContactService, TagService],
  host: { '(document:click)': 'onClick($event)' },
})

export class SearchBarComponent {
  @Output() onSearch = new EventEmitter<string>();
  @Output() onSearchByTag = new EventEmitter<number>();
  searchText: string;
  tags: Tag[] = [];
  showTags: boolean = false;

  constructor(private contactService: ContactService, private tagService: TagService, private _eref: ElementRef) { }

  findByTag(tag: Tag) {
    this.searchText = '#'+tag.title;
    this.showTags = false;
    this.onSearchByTag.emit(tag.tagId);
    
  }

  onClick(event: Event) {
 
    if (!this._eref.nativeElement.contains(event.target)) {
      this.showTags = false;
    }
  }

  search(searchText: string) {
    if (searchText.startsWith('#')) {
      this.tagService.findTags(searchText.substring(1))
        .then(tags => {
          this.tags = tags;
        });
      this.showTags = true;
    } else {
      this.showTags = false;
      this.onSearch.emit(searchText);
    }
  }
}