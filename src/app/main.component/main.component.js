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
var MainComponent = /** @class */ (function () {
    function MainComponent() {
        this.slider = [];
        this.prevs = [];
        this.slideIndex = 0;
        this.prevs = [
            {
                photo: './../../Furniture [Agular]/src/assets/images/prev/cupboard_prev.jpg',
                name: 'Шкафы-купе',
                description: "\u041C\u044B \u0438\u0437\u0433\u043E\u0442\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u043C \u043C\u0435\u0431\u0435\u043B\u044C \u0430\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u043E \u043B\u044E\u0431\u043E\u0433\u043E \u0432\u0438\u0434\u0430 \u0438 \u043E\u0431\u0440\u0430\u0437\u0446\u0430, \u0447\u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043B\u0435\u0433\u043A\u043E \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u0434\u043B\u044F \u043B\u044E\u0431\u043E\u0433\u043E \u0438\u043D\u0442\u0435\u0440\u044C\u0435\u0440\u0430, \u043F\u043E\u0434 \u043B\u044E\u0431\u044B\u0435 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u0432\u043A\u0443\u0441 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430"
            },
            {
                photo: './../../Furniture [Agular]/src/assets/images/prev/kitchen_prev.jpg',
                name: 'Кухни',
                description: "\u041A\u0443\u0445\u043D\u044F - \u043E\u0434\u043D\u043E \u0438\u0437 \u043C\u0435\u0441\u0442, \u0433\u0434\u0435 \u0447\u0435\u043B\u043E\u0432\u0435\u043A \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u0442 \u0431\u043E\u043B\u044C\u0448\u0443\u044E \u0447\u0430\u0441\u0442\u044C \u0441\u0432\u043E\u0435\u0433\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438, \u043D\u0430\u0445\u043E\u0434\u044F\u0441\u044C \u0432 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0435"
            },
            {
                photo: './../../Furniture [Agular]/src/assets/images/prev/commode_prev.jpg',
                name: 'Комоды',
                description: "\u041D\u0430 \u0434\u0430\u043D\u043D\u044B\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u043A\u043E\u043C\u043E\u0434\u044B \u043E\u0447\u0435\u043D\u044C \u0440\u0430\u0437\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u043D\u044B, \u043E\u043D\u0438 \u043C\u043E\u0433\u0443\u0442 \u0438\u043C\u0435\u0442\u044C \u043A\u0430\u043A \u0448\u043A\u0430\u0444\u0447\u0438\u043A\u0438, \u0442\u0430\u043A \u0438 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0432\u044B\u0434\u0432\u0438\u0436\u043D\u044B\u0445 \u044F\u0449\u0438\u043A\u043E\u0432, \u0431\u044B\u0442\u044C \u043D\u0430 \u043D\u043E\u0436\u043A\u0430\u0445 \u0438\u043B\u0438 \u043D\u0430 \u0446\u043E\u043A\u043E\u043B\u044F\u0445, \u0442\u0430\u043A\u0436\u0435 \u0432 \u043D\u0438\u0445 \u043C\u043E\u0436\u043D\u043E \u0432\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0443"
            },
            {
                photo: './../../Furniture [Agular]/src/assets/images/prev/moduleSystem_prev.jpg',
                name: 'Модульные системы',
                description: "\u041C\u044B \u0441\u043E\u0437\u0434\u0430\u0435\u043C \u043F\u043E \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u043C \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u043C \u043C\u043E\u0434\u0443\u043B\u044C\u043D\u044B\u0435 \u0441\u0442\u0435\u043D\u043A\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435, \u043D\u0435 \u0442\u0435\u0440\u044F\u044F \u0432 \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u043C \u043F\u043B\u0430\u043D\u0435, \u0441\u043C\u043E\u0442\u0440\u044F\u0442\u0441\u044F \u0431\u043E\u043B\u0435\u0435 \u0441\u0442\u0438\u043B\u044C\u043D\u043E \u0438 \u043B\u0435\u0433\u043A\u043E"
            }
        ];
    }
    MainComponent.prototype.ngOnInit = function () {
        this.loadSliderImg(9);
        !function (d, id, did, st) {
            var js = d.createElement("script");
            js.src = "https://connect.ok.ru/connect.js";
            js.onload = js.onreadystatechange = function () {
                if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
                    if (!this.executed) {
                        this.executed = true;
                        setTimeout(function () {
                            this.OK.CONNECT.insertGroupWidget(id, did, st);
                        }, 0);
                    }
                }
            };
            d.documentElement.appendChild(js);
        }(document, "ok_group_widget", "53685328019587", this.setResolution());
    };
    MainComponent.prototype.loadSliderImg = function (num) {
        for (var i = 1; i <= num; i++) {
            this.slider.push('./../../Furniture [Agular]/src/assets/images/slider/1 (' + i + ').jpg');
        }
    };
    MainComponent.prototype.loadArrowleft = function () {
        return JSON.stringify('./../../Furniture [Agular]/src/assets/images/arrow-left.png').replace(/['"«»]/g, '');
    };
    MainComponent.prototype.loadArrowright = function () {
        return JSON.stringify('./../../Furniture [Agular]/src/assets/images/arrow-right.png').replace(/['"«»]/g, '');
    };
    //this.slider.push('./../../src/assets/images/slider/1 (' + i + ').jpg');
    MainComponent.prototype.setResolution = function () {
        if (window.screen.availWidth <= 768) {
            return '{"width":350, "height":218}';
        }
        else {
            return '{"width":470, "height":285}';
        }
    };
    MainComponent.prototype.showSlide = function (n) {
        this.slideIndex = n;
        var dots = document.getElementsByClassName('dot');
        for (var i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace('active', '');
            dots[i].className = dots[i].className.replace(' ', '');
        }
        dots[this.slideIndex].className += ' active';
    };
    MainComponent.prototype.plusSlide = function (n) {
        if (this.slideIndex + n >= this.slider.length) {
            this.slideIndex = 0;
        }
        else if (this.slideIndex + n < 0) {
            this.slideIndex = this.slider.length - 1;
        }
        else {
            this.slideIndex += n;
        }
        this.showSlide(this.slideIndex);
    };
    MainComponent.prototype.currentPhoto = function () {
        return JSON.stringify(this.slider[this.slideIndex]).replace(/['"«»]/g, '');
    };
    MainComponent.prototype.getPrevPhoto = function (num) {
        return JSON.stringify(this.prevs[num].photo).replace(/['"«»]/g, '');
    };
    MainComponent.prototype.getPrevName = function (num) {
        return JSON.stringify(this.prevs[num].name).replace(/['"«»]/g, '');
    };
    MainComponent.prototype.getPrevDescription = function (num) {
        return JSON.stringify(this.prevs[num].description).replace(/['"«»]/g, '');
    };
    MainComponent = __decorate([
        core_1.Component({
            moduleId: module.id.toString(),
            selector: 'main',
            templateUrl: 'main.component.html',
            styleUrls: ['main.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map