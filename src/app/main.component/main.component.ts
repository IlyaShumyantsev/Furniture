import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id.toString(),
    selector: 'main',
    templateUrl: 'main.component.html',
    styleUrls: ['main.component.css']
})
export class MainComponent implements OnInit {
    private slideIndex: number;
    private slider: Array<any> = [];
    private prevs: Array<any> = [];

    constructor() {
        this.slideIndex = 0;
        this.prevs = [
            {
                photo: './../../Furniture [Agular]/src/assets/images/prev/cupboard_prev.jpg',
                name: 'Шкафы-купе',
                description: `Мы изготавливаем мебель абсолютно любого вида и образца, что позволяет легко подобрать вариант для любого интерьера, под любые требования и вкус заказчика`
            },
            {
                photo: './../../Furniture [Agular]/src/assets/images/prev/kitchen_prev.jpg',
                name: 'Кухни',
                description: `Кухня - одно из мест, где человек проводит большую часть своего времени, находясь в квартире`
            },
            {
                photo: './../../Furniture [Agular]/src/assets/images/prev/commode_prev.jpg',
                name: 'Комоды',
                description: `На данный момент комоды очень разнообразны, они могут иметь как шкафчики, так и различное количество выдвижных ящиков, быть на ножках или на цоколях, также в них можно встроить подсветку`
            },
            {
                photo: './../../Furniture [Agular]/src/assets/images/prev/moduleSystem_prev.jpg',
                name: 'Модульные системы',
                description: `Мы создаем по индивидуальным проектам модульные стенки, которые, не теряя в функциональном плане, смотрятся более стильно и легко`
            }
        ]
    }

    ngOnInit(): void {
        this.loadSliderImg(9);

        !function (d: Document, id: string, did: string, st: string) {
            var js: any = d.createElement("script");
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
            }
            d.documentElement.appendChild(js);
        }(document, "ok_group_widget", "53685328019587", this.setResolution());
    }

    private loadSliderImg(num: number): void {
        for (let i = 1; i <= num; i++) {
            this.slider.push('./../../Furniture [Agular]/src/assets/images/slider/1 (' + i + ').jpg');
        }
    }

    private loadArrowleft(): string {
        return JSON.stringify('./../../Furniture [Agular]/src/assets/images/arrow-left.png').replace(/['"«»]/g, '');
    }

    private loadArrowright(): string {
        return JSON.stringify('./../../Furniture [Agular]/src/assets/images/arrow-right.png').replace(/['"«»]/g, '');
    }
    //this.slider.push('./../../src/assets/images/slider/1 (' + i + ').jpg');

    private setResolution(): string {
        if (window.screen.availWidth <= 768) {
            return '{"width":350, "height":218}';
        }
        else {
            return '{"width":470, "height":285}';
        }
    }

    private showSlide(n: any): void {
        this.slideIndex = n;
        let dots = document.getElementsByClassName('dot');
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace('active', '');
            dots[i].className = dots[i].className.replace(' ', '');
        }
        dots[this.slideIndex].className += ' active';
    }

    private plusSlide(n: any): void {
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
    }

    private currentPhoto(): string {
        return JSON.stringify(this.slider[this.slideIndex]).replace(/['"«»]/g, '');
    }

    private getPrevPhoto(num: any): string {
        return JSON.stringify(this.prevs[num].photo).replace(/['"«»]/g, '');
    }

    private getPrevName(num: any): string {
        return JSON.stringify(this.prevs[num].name).replace(/['"«»]/g, '');
    }

    private getPrevDescription(num: any): string {
        return JSON.stringify(this.prevs[num].description).replace(/['"«»]/g, '');
    }
}