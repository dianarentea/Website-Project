import { Component, ElementRef, ViewChild } from '@angular/core';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  @ViewChild('discoverElement') discoverElement: ElementRef;

  homePageTitle: string;

  constructor(private cardService:CardService){
  };

  ngOnInit(): void{
    this.homePageTitle='NEW ADVENTURE';
  }

  setTitleOnHomePage($event){
    this.homePageTitle=$event;
  }

  setTitle(newTitle: string) {
    this.homePageTitle = newTitle;
    this.scrollToDiscoverElement();
  }

  scrollToDiscoverElement() {
    this.discoverElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
