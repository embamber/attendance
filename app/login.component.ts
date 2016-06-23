import { Component }                   from '@angular/core';
import { ROUTER_DIRECTIVES }           from '@angular/router';
import { ConsoleLog }                  from './app.logging';
import { AuthenticationService, User } from './auth.service';

@Component({
    selector: 'login',
    providers: [AuthenticationService],
	templateUrl: 'app/login.component.html',
    styleUrls: ['css/login.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class LoginComponent {

	title = 'Welcome';

    public user = new User('','');
    public errorMsg = '';
 
    constructor(private _service: AuthenticationService, private _console: ConsoleLog)  { }

    login() {
        this._console.log('clicked login button');  
        if (!this._service.login(this.user)) {
            this.errorMsg = 'Failed to login';
        }
    }
}


