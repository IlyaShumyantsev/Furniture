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
var PromotionComponent = /** @class */ (function () {
    function PromotionComponent() {
        this.promos = [];
        this.promos = [
            {
                image: './../../Furniture [Agular]/src/assets/images/price.png',
                title: 'Рассрочка',
                desctiption: 'Рассрочка до 3-х месяцев без процентов и переплат'
            },
            {
                image: './../../Furniture [Agular]/src/assets/images/gift.png',
                title: 'Подарок',
                desctiption: 'При заказе кухни мойка в подарок'
            }
        ];
    }
    PromotionComponent.prototype.getPromoImg = function (num) {
        return JSON.stringify(this.promos[num].image).replace(/['"«»]/g, '');
    };
    PromotionComponent.prototype.getPromoTitle = function (num) {
        return JSON.stringify(this.promos[num].title).replace(/['"«»]/g, '');
    };
    PromotionComponent.prototype.getPromoDescription = function (num) {
        return JSON.stringify(this.promos[num].desctiption).replace(/['"«»]/g, '');
    };
    PromotionComponent = __decorate([
        core_1.Component({
            moduleId: module.id.toString(),
            selector: 'promotion',
            templateUrl: 'promotion.component.html',
            styleUrls: ['promotion.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], PromotionComponent);
    return PromotionComponent;
}());
exports.PromotionComponent = PromotionComponent;
//# sourceMappingURL=promotion.component.js.map