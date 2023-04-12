import { Component,OnInit } from '@angular/core';
import { cityCard } from '../models/cityCard.model';
import { CardService } from '../services/card.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-city-page',
  templateUrl: './city-page.component.html',
  styleUrls: ['./city-page.component.scss']
})
export class CityPageComponent implements OnInit {
  cardSavedInService!:cityCard;
  constructor(private cardService:CardService,private location:Location ){}
  goBack()
  {
    this.location.back();
  }
  ngOnInit(): void {
    this.cardSavedInService=this.cardService.savedCard;
  }

}
