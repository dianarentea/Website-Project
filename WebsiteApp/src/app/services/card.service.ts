import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { cityCard } from '../models/cityCard.model';

@Injectable({providedIn:'root',})
export class CardService{
    cardSubject= new Subject<cityCard>();
    cardSubject$=this.cardSubject.asObservable();

    constructor(){}
}