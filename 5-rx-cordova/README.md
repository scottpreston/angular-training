# RXJS/Observables & Cordova #

## Promises ##

From Day #1.

The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

* Promise.all - returns a single promise when all passed in promisies resolve.
* Promise.resolve - returns a promise that resolves and is `thenabled`.
* Promise.reject - returns a promise object that is rejected.
* Promise.then - is a promise and takes success and failure callbacks.

## Observables ##

From `ReactiveX` [http://reactivex.io/documentation/observable.html](http://reactivex.io/documentation/observable.html).

![observable image](./observable.png "observable image")

Simplest Observable In Code:

```javascript
var observable = Rx.Observable.create(function subscribe(observer) {
  var id = setInterval(() => {
    observer.next('hi')
  }, 1000);
});

observable.subscribe(x => console.log(x));
});
```

## Observables vs. Promises ##

From [https://stackoverflow.com/questions/37364973/angular-promise-vs-observable](https://stackoverflow.com/questions/37364973/angular-promise-vs-observable)

A `Promise` handles a single event when an async operation completes or fails.

An `Observable` is like a Stream (in many languages) and allows to pass zero or more events where the callback is called for each event.

## Operators ##

An Operator operates on an `Observable` and returns and `Observable`. 

You can get a full list of operators here:

[http://reactivex.io/documentation/operators.html](http://reactivex.io/documentation/operators.html)

A few operators of note:

* `Map` - transforms an `observable` by applying a function to each item in the `observable`.
* `Debounce` - only emit an item from an `observable` if a timespan has passed without emitting another item.
* `Filter` - emiy only those items from an Observable that passes a filter condition or test.

### Exercise ###

1. Create an observable using a timer.
2. Utilize `Map`, `Deboune` and `Filter` operators.
3. Subscribe this observable to `console.log`.

## NG-Rx-Store ##

Ng-Rx-Store was inspired by Redux. Which was an implementation of Flux.

Short Video:
[Flux At Facebook](https://youtu.be/nYkdrAPrdcw?list=PLb0IAmt7-GS188xDYE-u1ShQmFFGbrk0v&t=621)

Redux Explained

![redux](./redux-explained.png "redux explained")

### NgRx Store / Example ###

Component

 ```typescript
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { INCREMENT, DECREMENT, RESET } from './counter';

interface AppState {
  count: number;
}

@Component({
  selector: 'my-app',
  template: `
    <button (click)="increment()">Increment</button>
    <div>Current Count: {{ count$ | async }}</div>
    <button (click)="decrement()">Decrement</button>

    <button (click)="reset()">Reset Counter</button>
  `
})
export class MyAppComponent {
  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = store.pipe(select('count'));
  }

  increment(){
    this.store.dispatch({ type: INCREMENT });
  }

  decrement(){
    this.store.dispatch({ type: DECREMENT });
  }

  reset(){
    this.store.dispatch({ type: RESET });
  }
}
 ```

 Reducer

 ```typescript
import { Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export function counterReducer(state: number = 0, action: Action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;

    case RESET:
      return 0;

    default:
      return state;
  }
}
 ```

Bootstrapping

```typescript
import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({ count: counterReducer })
  ]
})
export class AppModule {}
```

The flow follows:

1. Component is constructed and `subscribes` to Store.
2. Dispatch From Component
3. Reducer Looks at `TYPE` and reduces state.
4. Because of `subscribe` when state updates, it modifies component.

### Exercise ###

1. Create a new App.
2. Create it with a few buttons up/down.
3. Use NgRxStore to mange buttons. 
4. Make your component subscribe to changes from the up/down buttons, by moving CSS 
position up or down in 10px increments.
5. Bonus Work. Modify [This Game](https://github.com/scottpreston/sandbox/tree/master/simple-game) and replace your code to move CSS up and down to move the person in the game up and down.

## Cordova ##

Cordova / PhoneGap / Electron all allow you to create mobile or desktop applications 
by using HTML, CSS and JS.

For More information go to the [Cordova Section](./cordova).