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
var contact_1 = require("../model/contact");
var ContactSummaryComponent = (function () {
    function ContactSummaryComponent(contactService) {
        this.contactService = contactService;
        this.onDeleteTag = new core_1.EventEmitter();
        this.onEditTag = new core_1.EventEmitter();
    }
    ContactSummaryComponent.prototype.onTagDeleted = function (tagId) {
        this.onDeleteTag.emit(tagId);
    };
    ContactSummaryComponent.prototype.onTagEdited = function (tag) {
        this.onEditTag.emit(tag);
    };
    ContactSummaryComponent.prototype.onTagRemoved = function (tagId) {
        var tagIndex = this.contact.tags.findIndex(function (tag) { return tag.tagId === tagId; });
        if (tagIndex > -1) {
            this.contact.tags.splice(tagIndex, 1);
        }
    };
    ContactSummaryComponent.prototype.onTagAdded = function (tag) {
        this.contact.tags.push(tag);
    };
    return ContactSummaryComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ContactSummaryComponent.prototype, "onDeleteTag", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ContactSummaryComponent.prototype, "onEditTag", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", contact_1.Contact)
], ContactSummaryComponent.prototype, "contact", void 0);
ContactSummaryComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'contact-summary',
        templateUrl: 'contactSummary.component.html',
        providers: [contact_service_1.ContactService]
    }),
    __metadata("design:paramtypes", [contact_service_1.ContactService])
], ContactSummaryComponent);
exports.ContactSummaryComponent = ContactSummaryComponent;
//# sourceMappingURL=contactSummary.component.js.map