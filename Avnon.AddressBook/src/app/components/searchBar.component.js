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
var SearchBarComponent = (function () {
    function SearchBarComponent(contactService, tagService, _eref) {
        this.contactService = contactService;
        this.tagService = tagService;
        this._eref = _eref;
        this.onSearch = new core_1.EventEmitter();
        this.onSearchByTag = new core_1.EventEmitter();
        this.tags = [];
        this.showTags = false;
    }
    SearchBarComponent.prototype.findByTag = function (tag) {
        this.searchText = '#' + tag.title;
        this.showTags = false;
        this.onSearchByTag.emit(tag.tagId);
    };
    SearchBarComponent.prototype.onClick = function (event) {
        if (!this._eref.nativeElement.contains(event.target)) {
            this.showTags = false;
        }
    };
    SearchBarComponent.prototype.search = function (searchText) {
        var _this = this;
        if (searchText.startsWith('#')) {
            this.tagService.findTags(searchText.substring(1))
                .then(function (tags) {
                _this.tags = tags;
            });
            this.showTags = true;
        }
        else {
            this.showTags = false;
            this.onSearch.emit(searchText);
        }
    };
    return SearchBarComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SearchBarComponent.prototype, "onSearch", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SearchBarComponent.prototype, "onSearchByTag", void 0);
SearchBarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'search-bar',
        templateUrl: 'searchBar.component.html',
        providers: [contact_service_1.ContactService, tag_service_1.TagService],
        host: { '(document:click)': 'onClick($event)' },
    }),
    __metadata("design:paramtypes", [contact_service_1.ContactService, tag_service_1.TagService, core_1.ElementRef])
], SearchBarComponent);
exports.SearchBarComponent = SearchBarComponent;
//# sourceMappingURL=searchBar.component.js.map