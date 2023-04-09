import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CitiesComponent} from '../app/cities/cities.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

    //ng-zorro
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
