"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var contactDetails_component_1 = require("./components/contactDetails.component");
var appRoutes = [
    {
        path: 'contact/:id',
        component: contactDetails_component_1.ContactDetailsComponent
    },
    {
        path: '',
        component: contactDetails_component_1.ContactDetailsComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.router.js.map