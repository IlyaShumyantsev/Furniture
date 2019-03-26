import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    moduleId: module.id.toString(),
    selector: 'album',
    templateUrl: 'album.component.html',
    styleUrls: ['album.component.css']
})
export class AlbumComponent implements OnInit {
    private id: any;
    private routeSubscription: Subscription;
    private category: string;
    private photos: Array<string> = [];

    constructor(private route: ActivatedRoute) {
        this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
        this.category = "";
    }

    ngOnInit(): void {
        switch(this.id) {
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
    }

    public loadPhoto(num: number, path: string): void {
        for (let i = 1; i <= num; i++) {
            this.photos.push('./../../Furniture [Agular]/src/assets/photos/' + path + '/1 (' + i + ').jpg');
        }
    }
    // this.photos.push('./../../Furniture [Agular]/src/assets/photos/' + path + '/1 (' + i + ').jpg');

    private getPrevPhoto(num: number): string {
        return JSON.stringify(this.photos[num]).replace(/['"«»]/g, '');
    }
}