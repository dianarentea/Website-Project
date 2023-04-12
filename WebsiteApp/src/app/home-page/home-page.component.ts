import { Component } from '@angular/core';
import { cityCard } from '../models/cityCard.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

homePageTitle:string='NEW ADVENTURE';

updateHomePageTitle(title:string)
{
console.warn(title);
this.homePageTitle=title;
}
}
