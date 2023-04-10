import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CitiesComponent} from '../app/cities/cities.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
{
  path:'home',
  component:HomePageComponent
},
{
  path:'cities', 
  component: CitiesComponent
},
  {
    path:'**',
    component:HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
