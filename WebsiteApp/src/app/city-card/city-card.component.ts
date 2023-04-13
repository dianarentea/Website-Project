import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { cityCard } from '../models/cityCard.model';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss']
})
export class CityCardComponent {
  location: any;

  constructor(private cardService: CardService) {
  };

  @Input() card: cityCard;
  @Output() titleEmitterCityCard: EventEmitter<string>=new EventEmitter<string>();

  sendTitleToHomePage()
  {
    this.titleEmitterCityCard.emit(this.card.title);
  }
  navigateToCityPage() {
    this.cardService.saveCardToService(this.card);
  }

  ngOnInit(): void {
  }

}
