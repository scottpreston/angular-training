# Angular Binding #

Lets begin by looking at somet of the binding we've already used in the previous examples.

## Binding Types ##

* One-Way -> Interpolation `{{property}}`
* One-Way -> Template Expressions `[hidden]="property"`
* One-Way -> Template Statements `(click)="deleteHero()"`


## One Way Bindingss

HTML Templates / `{{Interpolation}}`

```typescript
@Component({
  template: `
    <h1>{{title}}</h1>
    `
})

export class AppComponent {
  title = 'Tour of Heroes';
}
```

Property Binding `[target] = "expression"`

```typescript
@Component({
  template: `
    <h1 [innerHTML]="title"></h1>
    `
})

export class AppComponent {
  title = 'Tour of Heroes';
}
```

Template Statements `(click)="deleteHero()"`

Template Statements raise events.

```typescript
<button (click)="vote(true)"  [disabled]="voted">Agree</button>
```

* Two-Way <-> `[(target)]="property"`

## Binding Targets ##

* Properties - see `app.component.ts` example
* Events - `<button (click)="onSave()">Save</button>`
* Two-way - see `app.component.ts` example
* Attribute - `<td colspan="{{1 + 1}}">`
* Class - special kind of attribute binding `[class.special]="isSpecial"`
* Style `<button [style.color]="isSpecial ? 'red': 'green'">Red</button>`