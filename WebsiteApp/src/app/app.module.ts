import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TravelServicesComponent} from './travel-services/travel-services.component';
import { HomePageComponent } from './home-page/home-page.component';

import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CityCardComponent } from './city-card/city-card.component';
import { CitiesComponent } from './cities/cities.component';

@NgModule({
  declarations: [
    AppComponent,
    TravelServicesComponent,
    HomePageComponent,
    CityCardComponent,
    CitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    FormsModule,
    //ng-zorro
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
