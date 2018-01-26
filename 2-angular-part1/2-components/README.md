# Angular Components #

## Simple Component

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

## Component with external HTML and CSS

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
import { Component } from '@angular/core';

import { HEROES } from './hero';

@Component({
  selector: 'app-hero-parent',
  template: `
    <h2>{{master}} controls {{heroes.length}} heroes</h2>
    <app-hero-child *ngFor="let hero of heroes"
      [hero]="hero"
      [master]="master">
    </app-hero-child>
  `
})
export class HeroParentComponent {
  heroes = HEROES;
  master = 'Master';
}
```

## Child Component

```typescript
import { Component, Input } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'app-hero-child',
  template: `
    <h3>{{hero.name}} says:</h3>
    <p>I, {{hero.name}}, am at your service, {{masterName}}.</p>
  `
})
export class HeroChildComponent {
  @Input() hero: Hero;
  @Input('master') masterName: string;
}
```

## Decorators

Talked about 2 Decorators. `@Component` and `@Input`.

* `@Component` - 
* `@Input` - Flow is `into` the property when it's data is bound.
* `@Output` - Value flows `out` of the component as events bound w/Event Binding. (Usually EventEmiiter)

## Component Communication ##

Voter (Parent)

```typescript
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-voter',
  template: `
    <h4>{{name}}</h4>
    <button (click)="vote(true)"  [disabled]="voted">Agree</button>
    <button (click)="vote(false)" [disabled]="voted">Disagree</button>
  `
})
export class VoterComponent {
  @Input()  name: string;
  @Output() onVoted = new EventEmitter<boolean>();
  voted = false;

  vote(agreed: boolean) {
    this.onVoted.emit(agreed);
    this.voted = true;
  }
}
```

Vote Taker (Child)

```typescript
import { Component }      from '@angular/core';

@Component({
  selector: 'app-vote-taker',
  template: `
    <h2>Should mankind colonize the Universe?</h2>
    <h3>Agree: {{agreed}}, Disagree: {{disagreed}}</h3>
    <app-voter *ngFor="let voter of voters"
      [name]="voter"
      (onVoted)="onVoted($event)">
    </app-voter>
  `
})
export class VoteTakerComponent {
  agreed = 0;
  disagreed = 0;
  voters = ['Mr. IQ', 'Ms. Universe', 'Bombasto'];

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }
}
```

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

## HTML Component Templates ##

* Inline - like `app.component.ts`
* External - referencing a static HTML or CSS document, like `app2.component.ts`


