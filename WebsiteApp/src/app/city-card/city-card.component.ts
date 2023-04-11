import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { cityCard } from '../models/cityCard.model';
import { CardService } from '../services/card.service';
@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss']
})
export class CityCardComponent implements OnInit{
@Input() card!:cityCard;
@Input() showView=true;
@Output() cardEmitter:EventEmitter<cityCard>=new EventEmitter<cityCard>();

constructor(private router:Router, private cardService:CardService){}

ngOnInit(): void {}
}
