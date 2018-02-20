import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {HeroActionTypes, HeroActions} from './hero-actions';
import {Hero} from './hero';

@Injectable()
export class HeroEffectsService {
  // Listen for the 'LOGIN' action
  @Effect() login$: Observable<Action> = this.actions$.pipe(
    ofType<HeroActions>(HeroActionTypes.Fetch),
    mergeMap((action: HeroActions) =>
      this.http.get('http://localhost:3000/tweets', action.payload).pipe(
        // If successful, dispatch success action with result
        map((data) =>  ({ type: 'FETCH_HEROES_SUCCESS', payload: jsonToHeroes(data.json()) })),
        // If request fails, dispatch failed action
        catchError(() => of({ type: 'FETCH_HEROES_FAILURE' }))
      )
    )
  );
  


  constructor(
    private http: Http,
    private actions$: Actions
  ) {}
}

function jsonToHeroes(json) {
    let heroes: Hero[] = [];
    json.forEach(h => {
         heroes.push( new Hero(h,h));
    });
    return heroes;
}