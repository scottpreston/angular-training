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

Template Statements like `(click)="deleteHero()"` raise events.

```typescript
<button (click)="vote(true)"  [disabled]="voted">Agree</button>
```

## Two-Way Binding

Two way binding in a nutshell:

```typescript
<input [(ngModel)]="foo">

<p>Hello {{foo}}!</p>

// or
<input [value]="foo" (input)="foo = $event.target.value">

<p>Hello {{foo}}!</p>

```

The syntax ` [(ngModel)]="foo"`  binds to the interpolation in the template `{{foo}}`

## Note On Custom Directives ##

`ngForOf` or `ngFor`

A repeater directive.

```typescript
<div *ngFor="let hero of heroes">{{hero.name}}</div>
```

`ngIf`

Conditional Attribute Directive

```typescript
<div *ngIf="show">Text to show</div>
```