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
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.status = false;
        this.title = "Показать меню";
    }
    AppComponent.prototype.menu = function () {
        var x = document.getElementsByClassName('top-nav')[0];
        if (x.className === 'top-nav') {
            x.className += ' ' + 'responsive';
            this.status = true;
            this.title = "Скрыть меню";
        }
        else {
            x.className = 'top-nav';
            this.status = false;
            this.title = "Показать меню";
        }
    };
    AppComponent.prototype.resolution = function () {
        return window.screen.availWidth;
    };
    AppComponent.prototype.loadLogo = function () {
        return JSON.stringify('./../../Furniture [Agular]/src/assets/images/logo.png').replace(/['"«»]/g, '');
    };
    AppComponent.prototype.loadMtsico = function () {
        return JSON.stringify('./../../Furniture [Agular]/src/assets/images/mts_ico.png').replace(/['"«»]/g, '');
    };
    AppComponent.prototype.loadMobLogo = function () {
        return JSON.stringify('./../../Furniture [Agular]/src/assets/images/logo_mob.png').replace(/['"«»]/g, '');
    };
    AppComponent.prototype.loadHamburger = function () {
        return JSON.stringify('./../../Furniture [Agular]/src/assets/images/hamburger.png').replace(/['"«»]/g, '');
    };
    AppComponent.prototype.loadHamburgerUnpressed = function () {
        return JSON.stringify('./../../Furniture [Agular]/src/assets/images/hamburger_unpressed.png').replace(/['"«»]/g, '');
    };
    AppComponent.prototype.loadCallIco = function () {
        return JSON.stringify('./../../Furniture [Agular]/src/assets/images/call.png').replace(/['"«»]/g, '');
    };
    AppComponent.prototype.closeForm = function () {
        document.getElementById("modalWindow").style.display = "none";
        document.getElementById("shadowWindow").style.display = "none";
    };
    AppComponent.prototype.showForm = function () {
        document.getElementById("modalWindow").style.display = "block";
        document.getElementById("shadowWindow").style.display = "block";
    };
    AppComponent.prototype.sendMessage = function () {
        var submitButton = document.getElementById("submit_form");
        var form = document.getElementById("email_form");
        setTimeout(function () {
            this.submitButton.value = "Sending...";
            this.submitButton.disabled = true;
        }, 1);
        alert("Ваша заявка отправлена!");
        this.closeForm();
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id.toString(),
            selector: 'app',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map