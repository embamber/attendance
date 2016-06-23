import { Component }          from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

@Component({
	selector: 'app-content',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class AppComponent {}
