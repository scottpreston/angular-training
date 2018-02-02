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

## NGRx-Store ##

Ng-Rx-Store was inspired by Redux. Which was an implementation of Flux.

Short Video:
[Flux At Facebook](https://youtu.be/nYkdrAPrdcw?list=PLb0IAmt7-GS188xDYE-u1ShQmFFGbrk0v&t=621)

Redux Explained

![redux](./redux-explained.png "redux explained")

### NgRx - App.Module ###

 ```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import {counterReducer} from './reducers/counter';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ counter: counterReducer}) // state, reducer
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

 ```

### NgRx - Reducer

 ```typescript
import {ActionReducer, Action} from "@ngrx/store";

export const counterReducer: ActionReducer<number> = (state: number = 0, action: Action) => {
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};
 ```

### NgRx - Component

```typescript
import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from "@ngrx/store";

interface AppState {}

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']})

export class AppComponent {
  private title = 'app';
  private counter: number;
  
  constructor(private store: Store<AppState>) {
    // sets it to reference in store, selecting state 'counter'
    this.counter = this.store.select('counter');
  }

  increment() {
    this.store.dispatch({type: 'INCREMENT'});
  }

  decrement() {
    this.store.dispatch({type: 'DECREMENT'});
  }

}

```

### Template

```html
<!--The content below is only a placeholder and can be replaced.-->
<div style="text-align:center">
  <h1>
    Welcome to {{ title }}!
  </h1>
  <hr>
  <div>Current Count: {{ counter  | async }}</div>
  <!-- The async pipe subscribes to an Observable or Promise and returns the latest value it has emitted.  -->
  <button (click)="increment()">Increment</button>
  <button (click)="decrement()">Decrement</button> 
</div>
```

The flow follows:

1. Component is constructed and `subscribes/select` to Store.
2. Dispatch From Component
3. Reducer Looks at `TYPE` and reduces state.
4. Because of `subscribe/select` when state updates, it modifies component.

### Exercise ###

* Modify Challenge in `3-angular-part2/challenge` to use NgRx for `Hero Form` Component
* Bonus Work. Modify [This Game](https://github.com/scottpreston/sandbox/tree/master/simple-game) and replace your code to move CSS up and down to move the person in the game up and down.

## Cordova ##

Cordova / PhoneGap / Electron all allow you to create mobile or desktop applications 
by using HTML, CSS and JS.

For More information go to the [Cordova Section](./cordova).