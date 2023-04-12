import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TravelServicesComponent} from './travel-services/travel-services.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CitiesComponent } from './cities/cities.component';
import { CityPageComponent } from './city-page/city-page.component';

const routes: Routes = [
{
  path:'home',
  component:HomePageComponent
},
{
  path:'cities', 
  component: TravelServicesComponent
},
{
  path:'cities/cards',
  component: CitiesComponent
},
{
path:'city-page',
component: CityPageComponent
},
  {
    path:'**',
    component:HomePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
