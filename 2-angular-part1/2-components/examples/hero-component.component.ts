import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-component',
  templateUrl: './hero-component.component.html',
  styleUrls: ['./hero-component.component.css']
})
export class HeroComponentComponent implements OnInit {
 
  // properties
  title: string;
  myHero: string;

  constructor() { 
    
  }

  ngOnInit() {
    this.title = 'The Avengers';
    this.myHero = 'Iron Man';
  }

}
