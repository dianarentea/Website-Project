import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Input() citiesCard: cityCard;

  @Output() titleEmitter = new EventEmitter<string>();

  receiveTitleFromCityCard(title: string) {
    this.titleEmitter.emit(title);
  }

  constructor(private location: Location, private cardService: CardService) {
  }

  ngOnInit(): void {
    this.arrayOfCards = this.cardService.getArrayOfCards();
  }
}
