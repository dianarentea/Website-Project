import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { cityCard } from '../models/cityCard.model';

@Injectable({providedIn:'root',})
export class CardService{
    private _savedCard!:cityCard;
    cardSubject= new Subject<cityCard>();
    cardSubject$=this.cardSubject.asObservable();

    constructor(){}

    saveCardToService(card:cityCard)
    {
        this._savedCard=card;
    }
    get savedCard()
    {
        return this._savedCard;
    }

}