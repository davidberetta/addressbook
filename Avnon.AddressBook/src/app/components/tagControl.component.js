"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var contact_service_1 = require("../services/contact.service");
var tag_service_1 = require("../services/tag.service");
var TagControlComponent = (function () {
    function TagControlComponent(contactService, tagService, _eref) {
        this.contactService = contactService;
        this.tagService = tagService;
        this._eref = _eref;
        this.onTagDeleted = new core_1.EventEmitter();
        this.onTagRemoved = new core_1.EventEmitter();
        this.onTagAdded = new core_1.EventEmitter();
        this.onTagEdited = new core_1.EventEmitter();
        this.tagsLoaded = false;
        this.showDropDown = false;
    }
    TagControlComponent.prototype.onClick = function (event) {
        if (event.target.id.startsWith("tagops_"))
            return;
        if (!this._eref.nativeElement.contains(event.target)) {
            this.showDropDown = false;
        }
    };
    TagControlComponent.prototype.tagCheckChange = function (tagId) {
        var tag = this.tags.find(function (a) { return a.tagId === tagId; });
        if (tag == null || tag == undefined)
            return;
        if (tag.selected) {
            this.contactService.addTagToContact(this.contactId, tag);
            this.onTagAdded.emit(tag);
        }
        else {
            this.contactService.removeTagFromContact(this.contactId, tagId);
            this.onTagRemoved.emit(tagId);
        }
    };
    TagControlComponent.prototype.getTags = function () {
        var _this = this;
        this.showDropDown = true;
        this.tagService.getAllTags().then(function (tags) {
            for (var _i = 0, tags_1 = tags; _i < tags_1.length; _i++) {
                var tag = tags_1[_i];
                var selectedTag = _this.selectedTags && _this.selectedTags.length > 0 ? _this.selectedTags.find(function (o) { return o.tagId === tag.tagId; }) : undefined;
                tag.editing = false;
                if (selectedTag) {
                    tag.selected = true;
                }
                else
                    tag.selected = false;
            }
            _this.tags = tags;
            _this.tagsLoaded = true;
        });
    };
    TagControlComponent.prototype.addTag = function (title) {
        var _this = this;
        this.newTagText = '';
        var tagToAdd = { tagId: 0, title: title };
        this.contactService.addTagToContact(this.contactId, tagToAdd).then(function (tag) {
            tag.selected = true;
            _this.tags.push(tag);
            _this.onTagAdded.emit(tag);
        });
    };
    TagControlComponent.prototype.toggleEdit = function (id) {
        var tag = this.tags.find(function (tag) { return tag.tagId == id; });
        var isEditing = tag.editing;
        this.tags.forEach(function (a) {
            a.editing = false;
        });
        tag.editing = !isEditing;
    };
    TagControlComponent.prototype.editTag = function (tag) {
        var _this = this;
        tag.editing = false;
        this.tagService.editTag(tag).then(function (a) {
            _this.onTagEdited.emit(tag);
        });
    };
    TagControlComponent.prototype.deleteTag = function (id) {
        var _this = this;
        var index = this.tags.findIndex(function (tag) { return tag.tagId == id; });
        this.tags.splice(index, 1);
        this.tagService.deleteTag(id).then(function (a) {
            _this.onTagDeleted.emit(id);
        });
    };
    return TagControlComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TagControlComponent.prototype, "onTagDeleted", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TagControlComponent.prototype, "onTagRemoved", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TagControlComponent.prototype, "onTagAdded", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TagControlComponent.prototype, "onTagEdited", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], TagControlComponent.prototype, "contactId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], TagControlComponent.prototype, "selectedTags", void 0);
TagControlComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'tag-control',
        templateUrl: 'tagControl.component.html',
        providers: [contact_service_1.ContactService, tag_service_1.TagService],
        host: { '(document:click)': 'onClick($event)' },
    }),
    __metadata("design:paramtypes", [contact_service_1.ContactService, tag_service_1.TagService, core_1.ElementRef])
], TagControlComponent);
exports.TagControlComponent = TagControlComponent;
//# sourceMappingURL=tagControl.component.js.map