webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"page-header\">\r\n    <div class=\"container\">\r\n      <h1>\r\n        AVNON <small>Address Book</small>\r\n      </h1>\r\n    </div>\r\n    </div>\r\n\r\n\r\n<div class=\"navbar navbar-default\">\r\n  <div class=\"container container-fluid\">\r\n    <search-bar (onSearch)=\"onSearch($event)\" (onSearchByTag)=\"onSearchByTag($event)\"></search-bar>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-5 col-md-push-7 col-sm-6 col-sm-push-6\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n    <div class=\"col-md-7 col-md-pull-5 col-sm-6 col-sm-pull-6\">\r\n      <contact-summary (onDeleteTag)=\"onDeleteTag($event)\" (onEditTag)=\"onEditTag($event)\" *ngFor=\"let contact of contacts\" [contact]=\"contact\">\r\n      </contact-summary>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_contact_service__ = __webpack_require__("../../../../../src/app/services/contact.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
        selector: 'my-app',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_contact_service__["a" /* ContactService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_contact_service__["a" /* ContactService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_contact_service__["a" /* ContactService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_contactSummary_component__ = __webpack_require__("../../../../../src/app/components/contactSummary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_contactDetails_component__ = __webpack_require__("../../../../../src/app/components/contactDetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_searchBar_component__ = __webpack_require__("../../../../../src/app/components/searchBar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_tagControl_component__ = __webpack_require__("../../../../../src/app/components/tagControl.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_router__ = __webpack_require__("../../../../../src/app/app.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_config_config_service__ = __webpack_require__("../../../../../src/config/config.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        providers: [
            __WEBPACK_IMPORTED_MODULE_10_config_config_service__["a" /* ConfigService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* APP_INITIALIZER */],
                useFactory: __WEBPACK_IMPORTED_MODULE_10_config_config_service__["b" /* ConfigLoader */],
                deps: [__WEBPACK_IMPORTED_MODULE_10_config_config_service__["a" /* ConfigService */]],
                multi: true,
            }
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__app_router__["a" /* routing */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_contactSummary_component__["a" /* ContactSummaryComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_contactDetails_component__["a" /* ContactDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_searchBar_component__["a" /* SearchBarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_tagControl_component__["a" /* TagControlComponent */]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_contactDetails_component__ = __webpack_require__("../../../../../src/app/components/contactDetails.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


var appRoutes = [
    {
        path: 'contact/:id',
        component: __WEBPACK_IMPORTED_MODULE_1__components_contactDetails_component__["a" /* ContactDetailsComponent */]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__components_contactDetails_component__["a" /* ContactDetailsComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.router.js.map

/***/ }),

/***/ "../../../../../src/app/components/contactDetails.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-info panel panel-info\" *ngIf=\"isReady\">\r\n  <div class=\"panel-heading\">\r\n    <h4 class=\"panel-title\">{{contact.firstName}} {{contact.lastName}}</h4>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3\"><strong>Phone:</strong></div>\r\n        <div class=\"col-md-9\">{{contact.phone}}</div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3\"><strong>Email:</strong></div>\r\n        <div class=\"col-md-9\">{{contact.email}}</div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3\"><strong>LinkedIn:</strong></div>\r\n        <div class=\"col-md-9\">{{contact.linkedIn}}</div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3\"><strong>Skype:</strong></div>\r\n        <div class=\"col-md-9\">{{contact.skype}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"contact-info panel panel-info\" *ngIf=\"!isReady\">\r\n  <div class=\"panel-heading\">\r\n    <h4 class=\"panel-title\">Contact Details</h4>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n    <p>Click on a contact to view their details</p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/contactDetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_contact_service__ = __webpack_require__("../../../../../src/app/services/contact.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
        selector: 'contact-details',
        template: __webpack_require__("../../../../../src/app/components/contactDetails.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_contact_service__["a" /* ContactService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_contact_service__["a" /* ContactService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_contact_service__["a" /* ContactService */]) === "function" && _b || Object])
], ContactDetailsComponent);

var _a, _b;
//# sourceMappingURL=contactDetails.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/contactSummary.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"tag-control-wrapper\">\r\n  <tag-control (onTagDeleted)=\"onTagDeleted($event)\" \r\n               (onTagEdited)=\"onTagEdited($event)\" \r\n               (onTagRemoved)=\"onTagRemoved($event)\" \r\n               (onTagAdded)=\"onTagAdded($event)\" \r\n               [selectedTags]=\"contact.tags\" [contactId]=\"contact.contactId\"></tag-control>\r\n</div>\r\n<div id=\"contact-summary\" class=\"panel panel-default\"  [routerLink]=\"['/contact', contact.contactId]\">\r\n  <div class=\"panel-heading\">\r\n    <div >\r\n        <h3 class=\"panel-title\">{{contact.firstName}} {{contact.lastName}}</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n    <h4>{{contact.jobTitle}} at {{contact.company}}</h4>\r\n    <div *ngIf=\"contact.tags.length > 0\">\r\n      <span class=\"label label-primary\" *ngFor=\"let tag of contact.tags\">{{tag.title}}</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/contactSummary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_contact_service__ = __webpack_require__("../../../../../src/app/services/contact.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_contact__ = __webpack_require__("../../../../../src/app/model/contact.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactSummaryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactSummaryComponent = (function () {
    function ContactSummaryComponent(contactService) {
        this.contactService = contactService;
        this.onDeleteTag = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
        this.onEditTag = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Output */])(),
    __metadata("design:type", Object)
], ContactSummaryComponent.prototype, "onDeleteTag", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Output */])(),
    __metadata("design:type", Object)
], ContactSummaryComponent.prototype, "onEditTag", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__model_contact__["a" /* Contact */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__model_contact__["a" /* Contact */]) === "function" && _a || Object)
], ContactSummaryComponent.prototype, "contact", void 0);
ContactSummaryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
        selector: 'contact-summary',
        template: __webpack_require__("../../../../../src/app/components/contactSummary.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_contact_service__["a" /* ContactService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_contact_service__["a" /* ContactService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_contact_service__["a" /* ContactService */]) === "function" && _b || Object])
], ContactSummaryComponent);

var _a, _b;
//# sourceMappingURL=contactSummary.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/searchBar.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"search-bar\">\r\n  <input #searchBox placeholder=\"Search by Name, Company or #Tag\" class=\"form-control\" id=\"search-box\" (keyup)=\"search(searchBox.value)\" [(ngModel)]=\"searchText\" />\r\n  <ul *ngIf=\"showTags\" id=\"search-tags-list\" class=\"dropdown-menu\">\r\n    <li *ngFor=\"let tag of tags\">\r\n      <a (click)=\"findByTag(tag)\">\r\n        {{tag.title}}\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/searchBar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_contact_service__ = __webpack_require__("../../../../../src/app/services/contact.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tag_service__ = __webpack_require__("../../../../../src/app/services/tag.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchBarComponent = (function () {
    function SearchBarComponent(contactService, tagService, _eref) {
        this.contactService = contactService;
        this.tagService = tagService;
        this._eref = _eref;
        this.onSearch = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
        this.onSearchByTag = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Output */])(),
    __metadata("design:type", Object)
], SearchBarComponent.prototype, "onSearch", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Output */])(),
    __metadata("design:type", Object)
], SearchBarComponent.prototype, "onSearchByTag", void 0);
SearchBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
        selector: 'search-bar',
        template: __webpack_require__("../../../../../src/app/components/searchBar.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_contact_service__["a" /* ContactService */], __WEBPACK_IMPORTED_MODULE_2__services_tag_service__["a" /* TagService */]],
        host: { '(document:click)': 'onClick($event)' },
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_contact_service__["a" /* ContactService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_contact_service__["a" /* ContactService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_tag_service__["a" /* TagService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_tag_service__["a" /* TagService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ElementRef */]) === "function" && _c || Object])
], SearchBarComponent);

var _a, _b, _c;
//# sourceMappingURL=searchBar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/tagControl.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"tag-control\" class=\"btn-group\">\r\n  <button type=\"button\" class=\"btn btn-default dropdown-toggle\" (click)=\"getTags()\">\r\n    Tags <span class=\"caret\"></span>\r\n  </button>\r\n  <div id=\"tag-control-dropdown\" class=\"dropdown-menu\" *ngIf=\"showDropDown\">\r\n    <div class=\"tag-list\" *ngIf=\"tagsLoaded\">\r\n      <div id=\"tag-item\" class=\"tag-item\" *ngFor=\"let tag of tags\">\r\n        <span *ngIf=\"!tag.editing\">\r\n        <input (change)=\"tagCheckChange(tag.tagId)\" type=\"checkbox\" name=\"checkbox_{{tag.tagId}}\" [(ngModel)]=\"tag.selected\"/>\r\n          <label for=\"checkbox_{{tag.tagId}}\" id=\"tagops_label_{{tag.tagId}}\">\r\n            {{tag.title}}\r\n          </label>\r\n        </span>\r\n        <form (submit)=\"editTag(tag)\" id=\"edit-tag-form\" *ngIf=\"tag.editing\"><input class=\"form-control\" name=\"edit_{{tag.tagId}}\" type=\"text\" [(ngModel)]=\"tag.title\"/>\r\n        </form>\r\n        <div id=\"tagops_options_{{tag.tagId}}\" class=\"tag-options\">\r\n          <span id=\"tagops_editTag_{{tag.tagId}}\" (click)=\"toggleEdit(tag.tagId)\" class=\"glyphicon glyphicon-pencil\"></span>\r\n          <span id=\"tagops_deleteTag_{{tag.tagId}}\" (click)=\"deleteTag(tag.tagId)\" class=\"glyphicon glyphicon-remove\"></span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <form id=\"new-tag-form\" (submit)=\"addTag(tagTitle.value)\">\r\n      <input #tagTitle name=\"tagTitle\" type=\"text\" class=\"form-control\" placeholder=\"Add Tag and press Enter\" [(ngModel)]=\"newTagText\" autocomplete=\"off\"/>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/tagControl.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_contact_service__ = __webpack_require__("../../../../../src/app/services/contact.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tag_service__ = __webpack_require__("../../../../../src/app/services/tag.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagControlComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TagControlComponent = (function () {
    function TagControlComponent(contactService, tagService, _eref) {
        this.contactService = contactService;
        this.tagService = tagService;
        this._eref = _eref;
        this.onTagDeleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
        this.onTagRemoved = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
        this.onTagAdded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
        this.onTagEdited = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Output */])(),
    __metadata("design:type", Object)
], TagControlComponent.prototype, "onTagDeleted", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Output */])(),
    __metadata("design:type", Object)
], TagControlComponent.prototype, "onTagRemoved", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Output */])(),
    __metadata("design:type", Object)
], TagControlComponent.prototype, "onTagAdded", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Output */])(),
    __metadata("design:type", Object)
], TagControlComponent.prototype, "onTagEdited", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */])(),
    __metadata("design:type", Number)
], TagControlComponent.prototype, "contactId", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */])(),
    __metadata("design:type", Array)
], TagControlComponent.prototype, "selectedTags", void 0);
TagControlComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
        selector: 'tag-control',
        template: __webpack_require__("../../../../../src/app/components/tagControl.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_contact_service__["a" /* ContactService */], __WEBPACK_IMPORTED_MODULE_2__services_tag_service__["a" /* TagService */]],
        host: { '(document:click)': 'onClick($event)' },
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_contact_service__["a" /* ContactService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_contact_service__["a" /* ContactService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_tag_service__["a" /* TagService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_tag_service__["a" /* TagService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ElementRef */]) === "function" && _c || Object])
], TagControlComponent);

var _a, _b, _c;
//# sourceMappingURL=tagControl.component.js.map

/***/ }),

/***/ "../../../../../src/app/model/contact.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contact; });
var Contact = (function () {
    function Contact() {
    }
    return Contact;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ "../../../../../src/app/services/contact.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_config_config_service__ = __webpack_require__("../../../../../src/config/config.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactService = (function () {
    function ContactService(http, configService) {
        this.http = http;
        this.configService = configService;
        this.contactUrl = this.configService.get('apiUrl') + 'contact/';
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
        return this.http.get(this.contactUrl + 'tag/' + tagId)
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
        return this.http.get(this.contactUrl + id)
            .toPromise()
            .then(function (res) {
            var result = res.json();
            _this.cleanContact(result);
            return result;
        })
            .catch(this.handleError);
    };
    ContactService.prototype.addTagToContact = function (contactId, tag) {
        return this.http.put(this.contactUrl + contactId + '/tag/', tag)
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_config_config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_config_config_service__["a" /* ConfigService */]) === "function" && _b || Object])
], ContactService);

var _a, _b;
//# sourceMappingURL=contact.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/tag.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_config_config_service__ = __webpack_require__("../../../../../src/config/config.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TagService = (function () {
    function TagService(http, configService) {
        this.http = http;
        this.configService = configService;
        this.tagUrl = this.configService.get('apiUrl') + 'tag/';
    }
    TagService.prototype.getAllTags = function () {
        return this.http.get(this.tagUrl)
            .toPromise()
            .then(function (res) {
            var result = res.json();
            return result;
        })
            .catch(this.handleError);
    };
    TagService.prototype.findTags = function (searchText) {
        return this.http.get(this.tagUrl + '?title=' + searchText)
            .toPromise()
            .then(function (res) {
            var result = res.json();
            return result;
        })
            .catch(this.handleError);
    };
    TagService.prototype.addTag = function (tag) {
        return this.http.put(this.tagUrl, tag)
            .toPromise()
            .then(function (res) {
            var result = res.json();
            return result;
        })
            .catch(this.handleError);
    };
    TagService.prototype.editTag = function (tag) {
        return this.http.post(this.tagUrl, tag)
            .toPromise()
            .catch(this.handleError);
    };
    TagService.prototype.deleteTag = function (id) {
        return this.http.delete(this.tagUrl + id)
            .toPromise()
            .catch(this.handleError);
    };
    TagService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return TagService;
}());
TagService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_config_config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_config_config_service__["a" /* ConfigService */]) === "function" && _b || Object])
], TagService);

var _a, _b;
//# sourceMappingURL=tag.service.js.map

/***/ }),

/***/ "../../../../../src/config/config.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
/* harmony export (immutable) */ __webpack_exports__["b"] = ConfigLoader;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigService = (function () {
    function ConfigService(http) {
        this.http = http;
    }
    ConfigService.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('config/config.json').toPromise()
                .then(function (config) {
                _this._config = config.json();
                resolve();
            });
        });
    };
    ConfigService.prototype.get = function (key) {
        return this._config[key];
    };
    return ConfigService;
}());
ConfigService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core___["i" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ConfigService);

function ConfigLoader(configService) {
    return function () { return configService.load(); };
}
var _a;
//# sourceMappingURL=config.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map