# Angular Pipes #

Angular pipes transforms data on the UI. For example:

## Simple Example ##

```html
<p>The hero's birthday is {{ birthday | date:"MM/dd/yy" }} </p>
```
or pass a function `<p>The hero's birthday is {{ birthday | date:format }}</p>`

```typescript
export class HeroBirthday2Component {
  birthday = new Date(1988, 3, 15); // April 15, 1988
  toggle = true; // start with true == shortDate

  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }
}
```

## Custom Pipes ##

Use the `@Pipe` annotation and implement the `PipeTransform` interface.

So if you want to display an exponent of 2. 

`<p>Super power boost: {{2 | exponentialStrength: 10}}</p>` will become your poipe.

```typescript
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'exponentialStrength'})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent: string): number {
    let exp = parseFloat(exponent);
    return Math.pow(value, isNaN(exp) ? 1 : exp);
  }
}
```

## Exercise ##

1. Start a new Angular App (refresher)
2. Modify the H1 tag in the sample code that changes `{{title}}` to camelCase.
3. Bonus Content - Write an `async` pipe, use the documentation here: 
   [https://angular.io/guide/pipes](https://angular.io/guide/pipes)
