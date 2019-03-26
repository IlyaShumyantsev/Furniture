"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var AlbumComponent = /** @class */ (function () {
    function AlbumComponent(route) {
        var _this = this;
        this.route = route;
        this.photos = [];
        this.routeSubscription = route.params.subscribe(function (params) { return _this.id = params['id']; });
        this.category = "";
    }
    AlbumComponent.prototype.ngOnInit = function () {
        switch (this.id) {
            case "0": {
                this.category = "Шкафы-купе";
                this.loadPhoto(21, 'cupboard');
                break;
            }
            case "1": {
                this.category = "Кухни";
                this.loadPhoto(24, 'kitchen');
                break;
            }
            case "2": {
                this.category = "Комоды";
                this.loadPhoto(4, 'commode');
                break;
            }
            case "3": {
                this.category = "Модули";
                this.loadPhoto(24, 'modularSystems');
                break;
            }
        }
    };
    AlbumComponent.prototype.loadPhoto = function (num, path) {
        for (var i = 1; i <= num; i++) {
            this.photos.push('./../../Furniture [Agular]/src/assets/photos/' + path + '/1 (' + i + ').jpg');
        }
    };
    // this.photos.push('./../../Furniture [Agular]/src/assets/photos/' + path + '/1 (' + i + ').jpg');
    AlbumComponent.prototype.getPrevPhoto = function (num) {
        return JSON.stringify(this.photos[num]).replace(/['"«»]/g, '');
    };
    AlbumComponent = __decorate([
        core_1.Component({
            moduleId: module.id.toString(),
            selector: 'album',
            templateUrl: 'album.component.html',
            styleUrls: ['album.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], AlbumComponent);
    return AlbumComponent;
}());
exports.AlbumComponent = AlbumComponent;
//# sourceMappingURL=album.component.js.map