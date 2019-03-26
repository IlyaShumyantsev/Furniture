import { Component } from '@angular/core';

import { MainComponent } from '../main.component/main.component';

@Component({
    moduleId: module.id.toString(),
    selector: 'catalog',
    templateUrl: 'catalog.component.html',
    styleUrls: ['catalog.component.css'],
    providers: [MainComponent]
})
export class CatalogComponent {
    constructor(private mainComponent: MainComponent) { }
}