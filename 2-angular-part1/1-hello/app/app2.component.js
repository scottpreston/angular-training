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
var http_1 = require("@angular/http");
var AppComponent2 = (function () {
    function AppComponent2(http) {
        this.name = 'world';
        this.users = [];
        var that = this;
        this.users = [];
        http.get('./data.json')
            .subscribe(function (result) { return that.users = result.json().list; });
    }
    return AppComponent2;
}());
AppComponent2 = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app2/hello.html'
    }),
    __metadata("design:paramtypes", [http_1.Http])
], AppComponent2);
exports.AppComponent2 = AppComponent2;
//# sourceMappingURL=app2.component.js.map