"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var app_component_1 = require("./app.component/app.component");
var contacts_component_1 = require("./contacts.component/contacts.component");
var main_component_1 = require("./main.component/main.component");
var catalog_component_1 = require("./catalog.component/catalog.component");
var promotion_component_1 = require("./promotion.component/promotion.component");
var services_component_1 = require("./services.component/services.component");
var album_component_1 = require("./album.component/album.component");
var appRoutes = [
    { path: '', component: main_component_1.MainComponent },
    { path: 'contacts', component: contacts_component_1.ContactsComponent },
    { path: 'catalog', component: catalog_component_1.CatalogComponent },
    { path: 'album/:id', component: album_component_1.AlbumComponent },
    { path: 'promotion', component: promotion_component_1.PromotionComponent },
    { path: 'services', component: services_component_1.ServicesComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                common_1.CommonModule,
                router_1.RouterModule.forRoot(appRoutes, { useHash: true })
            ],
            declarations: [
                app_component_1.AppComponent,
                main_component_1.MainComponent,
                contacts_component_1.ContactsComponent,
                catalog_component_1.CatalogComponent,
                promotion_component_1.PromotionComponent,
                services_component_1.ServicesComponent,
                album_component_1.AlbumComponent
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map