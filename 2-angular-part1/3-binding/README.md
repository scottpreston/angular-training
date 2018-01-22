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

## Exercise ##

1. Create a component manually or with the CLI.
2. Create a Parent-Child Component where the data from one component is read/consumed in the other.
3. Create one and two way bindings so form data can display in a table below using `ngFor`.
4. Color the rows based on some data in the form.

Example JSON of a hero.

```
const hero = {
    name: "Tony Stark",
    alias: "Iron Man",
    favoriteColor: "FF3C00" // hotrod red
}
```

Create an app to add, edit, delete and display this information in a table.
