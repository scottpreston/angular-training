import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero'

@Component({
  selector: 'app-heroparent',
  templateUrl: './heroparent.component.html',
  styleUrls: ['./heroparent.component.css']
})
export class HeroparentComponent implements OnInit {
  
  heroes: Array<Hero> = new Array();
  voteCount: number = 0

  constructor() { }

  ngOnInit() {
    this.heroes.push( new Hero("Tony Stark", "Iron Man"));
    this.heroes.push(new Hero("Steve Rogers", "Captain America"));
  }
  
  onVoted(agreed: boolean) {
    this.voteCount = this.voteCount + 1;
  }
}
