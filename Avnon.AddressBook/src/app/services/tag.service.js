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
var TagService = (function () {
    function TagService(http) {
        this.http = http;
        this.tagUrl = 'http://localhost:50797/api/tag';
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
        return this.http.delete(this.tagUrl + '/' + id)
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
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TagService);
exports.TagService = TagService;
//# sourceMappingURL=tag.service.js.map