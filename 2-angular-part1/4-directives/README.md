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

Now to use this attribute directive just add the attribute. `<p appMyNewDirective>Yellow me!</p>`.

## Structural Directives ##

 An asterisk (*) precedes the directive attribute name for all `Structural Directives`.
 
 So the examples in the last chapter `ngFor` `ngSwitch` and `ngIf` are examples of `Structural Directives`.

Directive Deep Dive: 

* [https://angular.io/api/common/NgForOf](https://angular.io/api/common/NgForOf)
* [https://angular.io/api/common/NgIf](https://angular.io/api/common/NgIf)
* [https://angular.io/api/common/NgSwitch](https://angular.io/api/common/NgSwitch)

 An example of creating your own can be seen below:

 ```typescript
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

/**
 * Add the template content to the DOM unless the condition is true.
 */
@Directive({ selector: '[appUnless]'})
export class UnlessDirective {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input() set appUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
 ```

Using this directive in your code as follows:

```html
<p *appUnless="condition" class="unless a">
  (A) This paragraph is displayed because the condition is false.
</p>

<p *appUnless="!condition" class="unless b">
  (B) Although the condition is true,
  this paragraph is displayed because appUnless is set to false.
</p>
```

## Excercise ##

Add validators to the form you created in the previous exercise, then outline the form in red if it fails validation. Call this directive `myTextValidator`.