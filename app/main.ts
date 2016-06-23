import { bootstrap }            from '@angular/platform-browser-dynamic';
import { AppComponent }         from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { LOGGING_PROVIDERS }    from './app.logging';

bootstrap(AppComponent, [
	APP_ROUTER_PROVIDERS,
	LOGGING_PROVIDERS
]).catch(err => console.error(err));
