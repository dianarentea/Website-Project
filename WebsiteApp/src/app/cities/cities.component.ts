import { Component, OnInit } from '@angular/core';
import { cityCard } from '../models/cityCard.model';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  arrayOfCard: cityCard[]=[
   {
    title: 'Paris',
    image:'assets/images/paris.jpg',
    description:'Paris is one of the most beautiful cities in the world. It is known worldwide for the Louvre Museum, Notre-Dame cathedral, and the Eiffel tower. It has a reputation of being a romantic and cultural city. The city is also known for its high-quality gastronomy and the terraces of its cafés.'
   },
   {
    title: 'Viena',
    image:'assets/images/viena.jpg',
    description:'Paris is one of the most beautiful cities in the world. It is known worldwide for the Louvre Museum, Notre-Dame cathedral, and the Eiffel tower. It has a reputation of being a romantic and cultural city. The city is also known for its high-quality gastronomy and the terraces of its cafés.'
   },
   {
    title: 'Barcelona',
    image:'assets/images/barcelona.jpg',
    description:'Paris is one of the most beautiful cities in the world. It is known worldwide for the Louvre Museum, Notre-Dame cathedral, and the Eiffel tower. It has a reputation of being a romantic and cultural city. The city is also known for its high-quality gastronomy and the terraces of its cafés.'
   },
   {
    title: 'Geneva',
    image:'assets/images/geneva.jpg',
    description:'Paris is one of the most beautiful cities in the world. It is known worldwide for the Louvre Museum, Notre-Dame cathedral, and the Eiffel tower. It has a reputation of being a romantic and cultural city. The city is also known for its high-quality gastronomy and the terraces of its cafés.'
   },
   {
    title: 'Ljubljana',
    image:'assets/images/lubliana.jpg',
    description:'Paris is one of the most beautiful cities in the world. It is known worldwide for the Louvre Museum, Notre-Dame cathedral, and the Eiffel tower. It has a reputation of being a romantic and cultural city. The city is also known for its high-quality gastronomy and the terraces of its cafés.'
   },
   {
    title: 'Budapesta',
    image:'assets/images/budapesta.jpg',
    description:'Paris is one of the most beautiful cities in the world. It is known worldwide for the Louvre Museum, Notre-Dame cathedral, and the Eiffel tower. It has a reputation of being a romantic and cultural city. The city is also known for its high-quality gastronomy and the terraces of its cafés.'
   },
   
  ];

  ngOnInit(): void {
    }
  }
