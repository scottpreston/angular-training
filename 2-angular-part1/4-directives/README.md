# Angular Directives #

What are directives?

From the `cli` we created the directive below with:

`ng g directive my-new-directive`

```typescript
import { Directive } from '@angular/core';

@Directive({
  selector: '[appMyNewDirective]'
})
export class MyNewDirectiveDirective {
  constructor() { }
}
```

Lets modify this a little bit by modifying the constructor.

```typescript
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
    }
```

Then update the `app.module.ts`.


Now to use this attribute directive just add the attribute. `<p appMyNewDirective>Yellow me!</p>`.

```typescript
import { HighlightDirective } from './highlight.directive';
...
declarations: [
    ...
    HighlightDirective
  ],
...
```

## Structural Directives ##

 An asterisk (*) precedes the directive attribute name for all `Structural Directives`.
 
 So the examples in the last chapter `ngFor` `ngSwitch` and `ngIf` are examples of `Structural Directives`.

Directive Deep Dive: 

* [https://angular.io/api/common/NgForOf](https://angular.io/api/common/NgForOf)
* [https://angular.io/api/common/NgIf](https://angular.io/api/common/NgIf)
* [https://angular.io/api/common/NgSwitch](https://angular.io/api/common/NgSwitch)


## Excercise ##

1. Create a component manually or with the CLI.
2. Create a Parent-Child Component(s).
3. Pass Data from Parent -> Child
4. Pass Data from Child -> Parent
5. Utilize a `ngFor`, `ngIf`, and your own `custom` directive.