import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TravelServicesComponent} from './travel-services/travel-services.component';
import { HomePageComponent } from './home-page/home-page.component';

import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CityCardComponent } from './city-card/city-card.component';
import { CitiesComponent } from './cities/cities.component';
import { CityPageComponent } from './city-page/city-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TravelServicesComponent,
    HomePageComponent,
    CityCardComponent,
    CitiesComponent,
    CityPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    FormsModule,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
