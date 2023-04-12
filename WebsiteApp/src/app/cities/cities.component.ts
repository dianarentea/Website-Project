import { Component, OnInit } from '@angular/core';
import { cityCard } from '../models/cityCard.model';
import { CardService } from '../services/card.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  arrayOfCards: cityCard[] = [];
  constructor(private location:Location, private cardService:CardService) {}

  goBack()
  {
    this.location.back();
  }
  

  ngOnInit(): void {
    this.arrayOfCards=this.cardService.getArrayOfCards();
    }
  }
