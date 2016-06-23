"use strict";
var router_1 = require('@angular/router');
var login_routes_1 = require('./login.routes');
var dashboard_routes_1 = require('./dashboard.routes');
exports.routes = login_routes_1.LoginRoutes.concat(dashboard_routes_1.DashboardRoutes);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map