import { ActionReducer, Action } from "@ngrx/store";
import { Hero } from './hero';
import { HeroActions, HeroActionTypes } from './hero-actions'

export const HeroReducer: ActionReducer<Hero[]> = (state: Hero[] = [], action: HeroActions) => {
    switch (action.type) {
        case HeroActionTypes.Fetch:    
            return state;
        case HeroActionTypes.FetchSuccess:
            return action.payload;
        case HeroActionTypes.FetchFailure:
            return state;
        default:
            return state;
    }
};