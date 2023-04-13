import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { cityCard } from '../models/cityCard.model';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss']
})
export class CityCardComponent {

  constructor(private cardService: CardService) {
  };

  @Input() card: cityCard;

  navigateToCityPage() {
    this.cardService.saveCardToService(this.card);
  }

  sendTitleToService(): void
  {
    this.cardService.setCardTitle(this.card.title);
  }

  ngOnInit(): void {
    this.sendTitleToService();
  }

}
