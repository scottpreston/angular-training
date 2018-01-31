import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero'
import { HeroserviceService } from '../heroservice.service';

@Component({
  selector: 'app-heroparent',
  templateUrl: './heroparent.component.html',
  styleUrls: ['./heroparent.component.css']
})
export class HeroparentComponent implements OnInit {
  
  heroes: Array<Hero> = new Array();
  voteCount: number = 0

  constructor(private heroService: HeroserviceService) { }

  ngOnInit() {
    this.heroService.fetchHeros().subscribe(data => {
      const json = data.json();
      json.forEach(h => {
        this.heroes.push( new Hero(h,h));
      });
    })
    
  }
  
  onVoted(agreed: boolean) {
    this.voteCount = this.voteCount + 1;
  }
}
