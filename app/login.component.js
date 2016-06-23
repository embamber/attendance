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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var app_logging_1 = require('./app.logging');
var auth_service_1 = require('./auth.service');
var LoginComponent = (function () {
    function LoginComponent(_service, _console) {
        this._service = _service;
        this._console = _console;
        this.title = 'Welcome';
        this.user = new auth_service_1.User('', '');
        this.errorMsg = '';
    }
    LoginComponent.prototype.login = function () {
        this._console.log('clicked login button');
        if (!this._service.login(this.user)) {
            this.errorMsg = 'Failed to login';
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            providers: [auth_service_1.AuthenticationService],
            templateUrl: 'app/login.component.html',
            styleUrls: ['css/login.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthenticationService, app_logging_1.ConsoleLog])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map