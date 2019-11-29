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
var core_1 = require("@angular/core");
var content_services_1 = require("../services/content.services");
var ContentComponent = (function () {
    function ContentComponent(contentServices) {
        var _this = this;
        this.contentServices = contentServices;
        this.success = false;
        this.Message = '';
        this.contentServices.getContents().subscribe(function (response) {
            _this.contents = response.records;
        });
        this.contentServices.getCategories().subscribe(function (response) {
            _this.categories = response.records;
        });
        this.content =
            {
                name: '',
                id: '',
                category_id: '',
                description: '',
                CreatedDate: '',
                category_name: ''
            };
    }
    ContentComponent.prototype.addContent = function () {
        var _this = this;
        console.log(this.content);
        this.contentServices.addContents(this.content).subscribe(function (response) {
            _this.Message = response.message;
            _this.success = true;
            _this.contentServices.getContents().subscribe(function (response) {
                _this.contents = response.records;
            });
        });
        this.content =
            {
                name: '',
                id: '',
                category_id: '',
                description: '',
                CreatedDate: '',
                category_name: ''
            };
    };
    return ContentComponent;
}());
ContentComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'content',
        templateUrl: "content.component.html",
        providers: [content_services_1.ContentServices]
    }),
    __metadata("design:paramtypes", [content_services_1.ContentServices])
], ContentComponent);
exports.ContentComponent = ContentComponent;
//# sourceMappingURL=content.component.js.map