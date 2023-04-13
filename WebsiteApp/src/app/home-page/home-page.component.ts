import { Component } from '@angular/core';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  homePageTitle: string;

  constructor(private cardService:CardService){
  };
  
  ngOnInit(): void{
    
    this.homePageTitle = this.cardService.getCardTitle();
    if(this.homePageTitle=='')
   {
    this.homePageTitle='NEW ADVENTURE';
   }
  }

}
