import { Component } from '@angular/core';

@Component({
    moduleId: module.id.toString(),
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    private status:boolean;
    private title:string;

    constructor() {
        this.status = false;
        this.title = "Показать меню";
     }

    private menu():void {
        let x = document.getElementsByClassName('top-nav')[0];
        if(x.className === 'top-nav'){
            x.className += ' ' + 'responsive';
            this.status = true;
            this.title = "Скрыть меню";
        }
        else{
            x.className = 'top-nav';
            this.status = false;
            this.title = "Показать меню";
        }
    }

    private resolution():number {
        return window.screen.availWidth;
    }

    private loadLogo(): string {
        return JSON.stringify('./../../Furniture [Agular]/src/assets/images/logo.png').replace(/['"«»]/g, '');
    }

    private loadMtsico(): string {
        return JSON.stringify('./../../Furniture [Agular]/src/assets/images/mts_ico.png').replace(/['"«»]/g, '');
    }

    private loadMobLogo(): string {
        return JSON.stringify('./../../Furniture [Agular]/src/assets/images/logo_mob.png').replace(/['"«»]/g, '');
    }

    private loadHamburger(): string {
        return JSON.stringify('./../../Furniture [Agular]/src/assets/images/hamburger.png').replace(/['"«»]/g, '');
    }

    private loadHamburgerUnpressed(): string {
        return JSON.stringify('./../../Furniture [Agular]/src/assets/images/hamburger_unpressed.png').replace(/['"«»]/g, '');
    }

    private loadCallIco(): string {
        return JSON.stringify('./../../Furniture [Agular]/src/assets/images/call.png').replace(/['"«»]/g, '');
    }

    private closeForm(): void {
        document.getElementById("modalWindow").style.display = "none";
        document.getElementById("shadowWindow").style.display = "none";
    }

    private showForm(): void {
        document.getElementById("modalWindow").style.display = "block";
        document.getElementById("shadowWindow").style.display = "block";
    }

    private sendMessage(): void {
        var submitButton = document.getElementById("submit_form");
        var form = document.getElementById("email_form");
        setTimeout(function () {
            this.submitButton.value = "Sending...";
            this.submitButton.disabled = true;
        }, 1);
        alert("Ваша заявка отправлена!");
        this.closeForm();
    }
}
