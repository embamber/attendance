import { DashboardComponent } from './dashboard.component';

export const DashboardRoutes = [
	{ 
		path: '',
		redirectTo: '/dashboard',
		terminal: true
	},
	{
		path: 'dashboard',
		component: DashboardComponent
	}
];