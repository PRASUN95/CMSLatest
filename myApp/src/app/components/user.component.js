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
var user_services_1 = require("../services/user.services");
var UserComponent = (function () {
    function UserComponent(userServices) {
        var _this = this;
        this.userServices = userServices;
        this.name = 'Angular';
        this.email = "Angular2@gmail.com";
        this.address =
            {
                street: '18 main road',
                city: 'Wakanda',
                state: 'Slokovia',
                zip: '78787878'
            };
        this.hobbies = ['cricket', 'football'];
        this.showHobbies = false;
        this.userServices.getPosts().subscribe(function (posts) {
            _this.users = posts;
        });
    }
    UserComponent.prototype.toggleHobbies = function () {
        if (this.showHobbies == true) {
            this.showHobbies = false;
        }
        else {
            this.showHobbies = true;
        }
    };
    UserComponent.prototype.addHobby = function (Hobby) {
        this.hobbies.push(Hobby);
    };
    UserComponent.prototype.deleteHobby = function (i) {
        debugger;
        this.hobbies.splice(i, 1);
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'user',
        templateUrl: "user.component.html",
        providers: [user_services_1.UserServices]
    }),
    __metadata("design:paramtypes", [user_services_1.UserServices])
], UserComponent);
exports.UserComponent = UserComponent;
;
//# sourceMappingURL=user.component.js.map