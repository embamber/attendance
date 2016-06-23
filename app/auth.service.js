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
var User = (function () {
    function User(email, password) {
        this.email = email;
        this.password = password;
    }
    return User;
}());
exports.User = User;
var users = [
    new User('admin@admin.com', 'adm9'),
    new User('user1@gmail.com', 'a23')
];
var AuthenticationService = (function () {
    function AuthenticationService(_router, _console) {
        this._router = _router;
        this._console = _console;
    }
    // console log:
    // this._console.log('message here');
    AuthenticationService.prototype.logout = function () {
        this._console.log('remove user and redirect to login page');
        localStorage.removeItem('user');
        this._router.navigate(['/login']);
    };
    AuthenticationService.prototype.login = function (user) {
        this._console.log('logging user in...');
        var authenticatedUser = users.find(function (u) { return u.email === user.email; });
        if (authenticatedUser) {
            this._console.log('user authenticated...');
            localStorage.setItem('user', JSON.stringify(authenticatedUser));
            this._router.navigate(['/dashboard']);
            return true;
        }
        return false;
    };
    AuthenticationService.prototype.checkCredentials = function () {
        this._console.log('checking if user is authenticated, if not redirect to login');
        if (localStorage.getItem('user') === null) {
            this._router.navigate(['/login']);
        }
    };
    AuthenticationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, app_logging_1.ConsoleLog])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=auth.service.js.map