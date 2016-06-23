import { Injectable } from '@angular/core';
import { Router }     from '@angular/router';
import { ConsoleLog } from './app.logging';

export class User {
  constructor(public email: string, public password: string) {}
}
 
var users = [
  new User('admin@admin.com','adm9'),
  new User('user1@gmail.com','a23')
];
 
@Injectable()
export class AuthenticationService {

  constructor (public _router: Router, public _console: ConsoleLog) { }

  // console log:
  // this._console.log('message here');

  logout() {
    this._console.log('remove user and redirect to login page');
    localStorage.removeItem('user');
    this._router.navigate(['/login']);
  }
 
  login(user){
    this._console.log('logging user in...');
    var authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser) {
      this._console.log('user authenticated...');
      localStorage.setItem('user', JSON.stringify(authenticatedUser));
      this._router.navigate(['/dashboard']);      
      return true;
    }
    return false;
  }
 
  checkCredentials(){
    this._console.log('checking if user is authenticated, if not redirect to login');
    if (localStorage.getItem('user') === null) {
        this._router.navigate(['/login']);
    }
  } 
}