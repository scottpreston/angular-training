# Angular Components #

To begin create a new app.

```bash
ng new componentSample
cd componentSample
ng g component hero
```

## Simple Component - with inline template

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero}}</h2>
    `
})
export class AppComponent {
  title = 'Tour of Heroes';
  myHero = 'Windstorm';
}
```

## Simple Component - with external HTML and CSS

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './template.html',
  styleUrls: [ './template.css' ]
})

export class AppComponent {
  title = 'Tour of Heroes';
  myHero = 'Windstorm';
  
}
```

## Parent Components

```typescript
import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero'

@Component({
  selector: 'app-heroparent',
  templateUrl: './heroparent.component.html',
  styleUrls: ['./heroparent.component.css']
})
export class HeroparentComponent implements OnInit {
  
  heroes: Array<Hero> = new Array();
  voteCount: number = 0

  constructor() { }

  ngOnInit() {
    this.heroes.push( new Hero("Tony Stark", "Iron Man"));
    this.heroes.push(new Hero("Steve Rogers", "Captain America"));
  }
  
  onVoted(agreed: boolean) {
    this.voteCount = this.voteCount + 1;
  }
}

```

### Parent Template

```html
<h2>List of Heros</h2>
<div>Votes: {{voteCount}}</div>
<app-herochild *ngFor="let hero of heroes; let i = index"
      [name]="hero.name"
      [index]="i"
      (onVoted)="onVoted($event)">
    </app-herochild>
```

## Child Component

```typescript
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {HighlightDirective} from '../highlight.directive';

@Component({
  selector: 'app-herochild',
  templateUrl: './herochild.component.html',
  styleUrls: ['./herochild.component.css']
})
export class HerochildComponent implements OnInit {

  @Input('name') name: string;
  @Input('index') index: number;
  @Output() onVoted = new EventEmitter<boolean>();
  toHighlight : boolean;
  
  vote() {
    this.onVoted.emit(true);
  }
  
  constructor() { 
    
  }

  ngOnInit() {
    this.toHighlight = (this.index % 2 === 0);
  }

}

```

### Child Template

```html
<div class="hero">{{toHighlight}}
<p *ngIf="toHighlight" appHighlight >I am {{name}} ({{index}}).</p>
<p *ngIf="toHighlight == false">I am {{name}} ({{index}}).</p>
<button (click)="vote()">Vote</button>
</div>
```

## Decorators

Talked about 2 Decorators. `@Component` and `@Input`.

* `@Component` - Decorator for a Component Type
* `@Input` - Flow is `into` the property when it's data is bound.
* `@Output` - Value flows `out` of the component as events bound w/Event Binding. (Usually EventEmiiter)

## Angular Lifecycle ##

A `component` has a lifecycle managed by Angular.

![lifecycle image](./hooks-in-sequence.png "lifecycle hooks")

## Lifecycle Methods ##

* ngOnChanges() - Respond when Angular (re)sets data-bound input properties. 
* ngOnInit() - Initialize the directive/component after Angular first displays the data-bound properties and sets the directive/component's input properties.
* ngDoCheck() - Detect and act upon changes that Angular can't or won't detect on its own.
* ngAfterContentInit() - Respond after Angular projects external content into the component's view.
* ngAfterContentChecked() - Respond after Angular checks the content projected into the component.
* ngAfterViewInit() - Respond after Angular initializes the component's views and child views.
* ngAfterViewChecked() - Respond after Angular checks the component's views and child views.
* ngOnDestroy() - Cleanup just before Angular destroys the directive/component.

Note: `All information copied from https://angular.io/guide/lifecycle-hooks`
