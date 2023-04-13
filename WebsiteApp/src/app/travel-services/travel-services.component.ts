import { Component, EventEmitter, Output } from '@angular/core';
import { cityCard } from '../models/cityCard.model';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-travel-services',
  templateUrl: './travel-services.component.html',
  styleUrls: ['./travel-services.component.scss']
})
export class TravelServicesComponent {
  arrayOfCards: cityCard[] = [];

  @Output() titleEmitter = new EventEmitter<string>();

  receiveTitleFromCityCard(title: string) {
    this.titleEmitter.emit(title);
  }

  constructor( private cardService:CardService) {}

  searchName = '';
  filteredCards = this.arrayOfCards;

  search() {
    this.filteredCards = this.arrayOfCards.filter(card => {
      return card.title.toLowerCase().includes(this.searchName.toLowerCase());
    });
  }
  clearSearch() {
    this.searchName = '';
    this.search();
  }
  ngOnInit(): void {
    this.arrayOfCards=this.cardService.getArrayOfCards();
    }
}
