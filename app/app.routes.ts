import { provideRouter, RouterConfig }  from '@angular/router';
import { LoginRoutes }                  from './login.routes';
import { DashboardRoutes }              from './dashboard.routes';

export const routes: RouterConfig = [
	...LoginRoutes,
	...DashboardRoutes
];

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
];