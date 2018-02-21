
/**
Listen for the 'LOGIN' action
  @Effect() loadHeroes$: Observable<Action> = this.actions$.pipe(
    ofType<HeroActions>(HeroActionTypes.Fetch), // filter
    mergeMap((action: HeroActions) =>
      this.http.get('http://localhost:3000/tweets', action.payload).pipe(
        // If successful, dispatch success action with result
        map((data) =>  ({ type: 'FETCH_HEROES_SUCCESS', payload: jsonToHeroes(data.json()) })),
        // If request fails, dispatch failed action
        catchError(() => of({ type: 'FETCH_HEROES_FAILURE' }))
      )
    )
  );
*/

var Rx = require('rxjs/Rx');
var map = require('rxjs/operators/map').map;
var filter = require('rxjs/operators/filter').filter;
var from = require('rxjs/observable/from').from;
var of = require('rxjs/observable/of').of;

var object = [
    {name: 'Tony Stark', alias: 'Iron Man', group: "Avengers"},
    {name: 'Steve Rogers' , alias: 'Captain America', group: "Avengers"},
    {name: 'Logan Hewlett' , alias: 'Wolverine', group: "X-Men"}
];

const source = from(object);
const source2 = of(object);
const source3 = of(    {name: 'Tony Stark', alias: 'Iron Man', group: "Avengers"},
{name: 'Steve Rogers' , alias: 'Captain America', group: "Avengers"},
{name: 'Logan Hewlett' , alias: 'Wolverine', group: "X-Men"});

source.pipe(
  filter(val => (val.group === "Avengers")),
  map(val => val.name + ',and more...')
).subscribe(console.log);  

console.log('--- of ---')
source2.pipe(
    //filter(val => (val.group === "Avengers")),
    //map(val => val.name + ',and more...')
  ).subscribe(console.log);  

console.log('--- of2 ---')
source3.pipe(
    filter(val => (val.group === "Avengers")),
    map(val => val.name + ',and more...')
  ).subscribe(console.log);  