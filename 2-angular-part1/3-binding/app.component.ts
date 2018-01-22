import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero}}</h2>
    <div [innerHTML]="myHero"></div>
    <button (click)="dec()" title="smaller">-</button>
    <button (click)="inc()" title="bigger">+</button>
    `
})
export class AppComponent {
  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

  title = 'Tour of Heroes';
  myHero = 'Windstorm';
  i=0;

  resize(delta: number) {
    this.i = i + delta;
  }
}