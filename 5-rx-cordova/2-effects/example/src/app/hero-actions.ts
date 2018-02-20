import { Action } from '@ngrx/store';
import { Hero } from './hero';

export enum HeroActionTypes {
    Fetch = 'FETCH_HEROES',
    FetchSuccess = "FETCH_HEROES_SUCCESS",
    FetchFailure = "FETCH_HEROES_FAILURE"
}

export class HeroLoad implements Action {
   
    readonly type = HeroActionTypes.Fetch;
    constructor(public payload: Hero[]) {
        console.log('in hero load');
     }
}
export class HeroLoadSuccess implements Action {
    readonly type = HeroActionTypes.FetchSuccess;
    constructor(public payload: any) { }
}

export class HeroLoadFailure implements Action {
    readonly type = HeroActionTypes.FetchFailure;
    constructor(public payload: any) { }
}

export type HeroActions = HeroLoad | HeroLoadSuccess | HeroLoadFailure ;