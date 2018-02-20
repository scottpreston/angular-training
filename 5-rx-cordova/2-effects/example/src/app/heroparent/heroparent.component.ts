import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import { Observable } from 'rxjs/Observable';
import {Hero} from '../hero'
import { HeroserviceService } from '../heroservice.service';
import { HeroEffectsService } from '../hero-effects.service';
import {HeroActions, HeroLoad} from '../hero-actions';

interface AppState {
  heroes: Hero[]
}

@Component({
  selector: 'app-heroparent',
  templateUrl: './heroparent.component.html',
  styleUrls: ['./heroparent.component.css']
})

export class HeroparentComponent implements OnInit {
  
  heroes$: Observable<Hero[]>;
  voteCount: number = 0

  constructor(private store: Store<AppState>) {
    this.heroes$ = this.store.select('heroes');

   }

  ngOnInit() {
    this.store.dispatch({type:'FETCH_HEROES'});
    // this.heroService.fetchHeros().subscribe(data => {
    //   const json = data.json();
    //   json.forEach(h => {
    //     this.heroes.push( new Hero(h,h));
    //   });
    // })
    
  }
  
  onVoted(agreed: boolean) {
    this.voteCount = this.voteCount + 1;
  }
}
