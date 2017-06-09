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
var contact_service_1 = require("./services/contact.service");
require("rxjs/add/operator/debounceTime");
var AppComponent = (function () {
    function AppComponent(contactService) {
        this.contactService = contactService;
        this.contacts = [];
    }
    AppComponent.prototype.onDeleteTag = function (tagId) {
        for (var _i = 0, _a = this.contacts; _i < _a.length; _i++) {
            var contact = _a[_i];
            var index = contact.tags.findIndex(function (tag) { return tag.tagId === tagId; });
            if (index > -1)
                contact.tags.splice(index, 1);
        }
    };
    AppComponent.prototype.onEditTag = function (tag) {
        for (var _i = 0, _a = this.contacts; _i < _a.length; _i++) {
            var contact = _a[_i];
            var tagToEdit = contact.tags.find(function (a) { return a.tagId === tag.tagId; });
            if (tagToEdit) {
                tagToEdit.title = tag.title;
            }
        }
    };
    AppComponent.prototype.onSearch = function (searchText) {
        var _this = this;
        this.contactService.findContacts(searchText)
            .then(function (contacts) {
            _this.contacts = contacts;
        });
    };
    AppComponent.prototype.onSearchByTag = function (tagId) {
        var _this = this;
        this.contactService.getContactsByTag(tagId)
            .then(function (contacts) {
            _this.contacts = contacts;
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contactService.getAllContacts()
            .then(function (contacts) {
            _this.contacts = contacts;
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: 'app.component.html',
        providers: [contact_service_1.ContactService]
    }),
    __metadata("design:paramtypes", [contact_service_1.ContactService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map