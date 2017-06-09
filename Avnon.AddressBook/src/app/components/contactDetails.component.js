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
var router_1 = require("@angular/router");
var contact_service_1 = require("../services/contact.service");
var ContactDetailsComponent = (function () {
    function ContactDetailsComponent(route, contactService) {
        var _this = this;
        this.route = route;
        this.contactService = contactService;
        this.isReady = false;
        this.route.params.subscribe(function (params) {
            var id = +params["id"]; // cast to number
            if (!isNaN(id)) {
                _this.contactService.getContact(id).then(function (contact) {
                    _this.contact = contact;
                    _this.isReady = true;
                });
            }
        });
    }
    return ContactDetailsComponent;
}());
ContactDetailsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'contact-details',
        templateUrl: 'contactDetails.component.html',
        providers: [contact_service_1.ContactService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, contact_service_1.ContactService])
], ContactDetailsComponent);
exports.ContactDetailsComponent = ContactDetailsComponent;
//# sourceMappingURL=contactDetails.component.js.map