import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-heroform',
  templateUrl: './heroform.component.html',
  styleUrls: ['./heroform.component.css']
})
export class HeroformComponent implements OnInit {
  heroes: Array<Hero> = new Array();
  constructor() { }

  ngOnInit() {
  }
  
  addHero(name: string, alias: string) {
      this.heroes.push(new Hero(name,alias));
  }
}
