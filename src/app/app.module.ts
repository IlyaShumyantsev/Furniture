import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component/app.component';
import { ContactsComponent } from './contacts.component/contacts.component';
import { MainComponent } from './main.component/main.component';
import { CatalogComponent } from './catalog.component/catalog.component';
import { PromotionComponent } from './promotion.component/promotion.component';
import { ServicesComponent } from './services.component/services.component';
import { AlbumComponent } from './album.component/album.component';

const appRoutes:Routes = [
  { path: '', component: MainComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'album/:id', component: AlbumComponent },
  { path: 'promotion', component: PromotionComponent },
  { path: 'services', component: ServicesComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(appRoutes, { useHash:true })
  ],
  declarations: [
    AppComponent,
    MainComponent,
    ContactsComponent,
    CatalogComponent,
    PromotionComponent,
    ServicesComponent,
    AlbumComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
