import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { cityCard } from '../models/cityCard.model';

@Injectable({ providedIn: 'root', })
export class CardService {
    private _savedCard!: cityCard;

    cardSubject = new Subject<cityCard>();
    cardSubject$ = this.cardSubject.asObservable();
    private arrayOfCards: cityCard[] = [
        {
            title: 'Paris',
            image: 'assets/images/paris.jpg',
            description: 'Paris is one of the most beautiful cities in the world. It is known worldwide for the Louvre Museum, Notre-Dame cathedral, and the Eiffel tower. It has a reputation of being a romantic and cultural city. The city is also known for its high-quality gastronomy and the terraces of its cafés.'
        },
        {
            title: 'Viena',
            image: 'assets/images/viena.jpg',
            description: 'Vienna is the capital of Austria (a western democracy and member of the European Union). Located in the east of the country on the banks of the mighty Danube, the city houses almost 2 million people. Despite its size, Vienna retains the feel of a large town.'
        },
        {
            title: 'Barcelona',
            image: 'assets/images/barcelona.jpg',
            description: 'Barcelona is a city with a wide range of original leisure options that encourage you to visit time and time again. Overlooking the Mediterranean Sea, and famous for Gaudí and other Art Nouveau architecture, Barcelona is one of Europe s trendiest cities.'
        },
        {
            title: 'Geneva',
            image: 'assets/images/geneva.jpg',
            description: 'Geneva is the capital of the Swiss Canton of Geneva located in the south-westernmost corner of Switzerland. The city is situated along the banks of Europe s largest lake, Lake Geneva (Lac Léman), at the mouth of the Rhone River and is bordered by the Jura Mountains to the west and the French Alps in the east.'
        },
        {
            title: 'Ljubljana',
            image: 'assets/images/lubliana.jpg',
            description: 'Ljubljana is the green capital of a green country. The area on either side of the river with its picturesque bridges and the central market owes its distinctive appearance to the great architect Jože Plečnik. The city of thousands of events is surrounded by parks and are.'
        },
        {
            title: 'Budapest',
            image: 'assets/images/budapesta.jpg',
            description: 'The capital of Hungary is situated along the Danube, in the heart of the Carpathian basin. Hilly Buda, which comprises one-third of the city’s area of 525 km² is located along the right bank of the Danube surrounded by low mountains. The geology of Budapest has played a determining role in the city’s life over the course of history. Hot springs breaking through limestone mountains supplying water of 35-76 degrees centigrade gave rise to a flourishing culture of spas in the Roman Age and made Budapest one of the most popular spa cities of Europe. '
        },

    ];

    constructor() { }

    getArrayOfCards(): cityCard[] {
        return this.arrayOfCards;
    }
    saveCardToService(card: cityCard) {
        this._savedCard = card;
    }
    get savedCard() {
        return this._savedCard;
    }

}