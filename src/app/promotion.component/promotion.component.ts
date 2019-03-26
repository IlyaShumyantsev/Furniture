import { Component } from '@angular/core';

@Component({
    moduleId: module.id.toString(),
    selector: 'promotion',
    templateUrl: 'promotion.component.html',
    styleUrls: ['promotion.component.css']
})
export class PromotionComponent { 
    private promos: Array<any> = [];

    constructor() {
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

    private getPromoImg(num: any): string {
        return JSON.stringify(this.promos[num].image).replace(/['"«»]/g, '');
    }

    private getPromoTitle(num: any): string {
        return JSON.stringify(this.promos[num].title).replace(/['"«»]/g, '');
    }

    private getPromoDescription(num: any): string {
        return JSON.stringify(this.promos[num].desctiption).replace(/['"«»]/g, '');
    }
}