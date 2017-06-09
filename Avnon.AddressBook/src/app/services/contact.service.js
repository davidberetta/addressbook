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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var ContactService = (function () {
    function ContactService(http) {
        this.http = http;
        this.contactUrl = 'http://localhost:50797/api/contact';
    }
    ContactService.prototype.getAllContacts = function () {
        var _this = this;
        return this.http.get(this.contactUrl)
            .toPromise()
            .then(function (res) {
            var result = res.json();
            _this.cleanContacts(result);
            return result;
        })
            .catch(this.handleError);
    };
    ContactService.prototype.findContacts = function (searchText) {
        var _this = this;
        return this.http.get(this.contactUrl + '?searchText=' + searchText)
            .toPromise()
            .then(function (res) {
            var result = res.json();
            _this.cleanContacts(result);
            return result;
        })
            .catch(this.handleError);
    };
    ContactService.prototype.getContactsByTag = function (tagId) {
        var _this = this;
        return this.http.get(this.contactUrl + '/tag/' + tagId)
            .toPromise()
            .then(function (res) {
            var result = res.json();
            _this.cleanContacts(result);
            return result;
        })
            .catch(this.handleError);
    };
    ContactService.prototype.getContact = function (id) {
        var _this = this;
        return this.http.get(this.contactUrl + '/' + id)
            .toPromise()
            .then(function (res) {
            var result = res.json();
            _this.cleanContact(result);
            return result;
        })
            .catch(this.handleError);
    };
    ContactService.prototype.addTagToContact = function (contactId, tag) {
        return this.http.put(this.contactUrl + '/' + contactId + '/tag/', tag)
            .toPromise()
            .then(function (res) {
            var result = res.json();
            return result;
        })
            .catch(this.handleError);
    };
    ContactService.prototype.removeTagFromContact = function (contactId, tagId) {
        return this.http.delete(this.contactUrl + '/' + contactId + '/tag/' + tagId)
            .toPromise()
            .catch(this.handleError);
    };
    ContactService.prototype.cleanContacts = function (contacts) {
        for (var _i = 0, contacts_1 = contacts; _i < contacts_1.length; _i++) {
            var contact = contacts_1[_i];
            this.cleanContact(contact);
        }
    };
    ContactService.prototype.cleanContact = function (contact) {
        if (contact.tags === undefined || contact.tags === null) {
            contact.tags = [];
            return;
        }
        if (contact.tags.length === 1) {
            if (contact.tags[0] === null || contact.tags[0] === undefined) {
                contact.tags = [];
            }
        }
    };
    ContactService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return ContactService;
}());
ContactService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ContactService);
exports.ContactService = ContactService;
//# sourceMappingURL=contact.service.js.map