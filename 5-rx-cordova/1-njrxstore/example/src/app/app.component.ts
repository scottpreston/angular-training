import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from "@ngrx/store";

interface AppState {
  counter: number
}

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']})

export class AppComponent {
  private title = 'app';
  private counter$: Observable<number>;
  
  constructor(private store: Store<AppState>) {
    // sets it to reference in store, selecting state 'counter'
    this.counter$ = this.store.select('counter');
  }

  increment() {
    this.store.dispatch({type: 'INCREMENT'});
  }

  decrement() {
    this.store.dispatch({type: 'DECREMENT'});
  }

}
