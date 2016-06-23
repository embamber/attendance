import { Component }             from '@angular/core';
import { ROUTER_DIRECTIVES }     from '@angular/router';
import { ConsoleLog }            from './app.logging';
import { AuthenticationService } from './auth.service';

@Component({
    selector: 'dashboard',
    providers: [AuthenticationService],
    templateUrl: 'app/dashboard.component.html',
	styleUrls:  ['css/dashboard.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class DashboardComponent {
    
	title = 'Dashboard View (must be logged in)';

    constructor(private _service: AuthenticationService, private _console: ConsoleLog) {}

    ngOnInit() {
        this._console.log('call check credentials function');
        this._service.checkCredentials();
    }

    logout() {
        this._console.log('logging user out');
        this._service.logout();
    }
}


