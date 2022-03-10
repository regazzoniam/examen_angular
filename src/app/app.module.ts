import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegionsListeComponent } from './regions-liste/regions-liste.component';
import { DepartementsListeComponent } from './departements-liste/departements-liste.component';
import { CommunesListeComponent } from './communes-liste/communes-liste.component';

@NgModule({
  declarations: [
    AppComponent,
    RegionsListeComponent,
    DepartementsListeComponent,
    CommunesListeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
