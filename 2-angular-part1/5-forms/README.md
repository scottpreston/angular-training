# Angular Forms # 

## User Input ##

The `#` character is an `Angular Template Referecne Variable`. It allows direct access to an element from within the template.

So in the example below `#newHero` lets us access `newHero` in the `statement.directives` on all 3 
events.

```typescript
@Component({
    selector: 'sample-component',
    template: `
      <input #newHero
        (keyup.enter)="addHero(newHero.value)"
        (blur)="addHero(newHero.value); newHero.value='' ">
  
      <button (click)="addHero(newHero.value)">Add</button>
  
      <ul><li *ngFor="let hero of heroes">{{hero}}</li></ul>
    `
  })
  export class SampleComponent {
    heroes = ['Iron Man', 'Thor', 'Hulk', 'Captain America'];
    addHero(newHero: string) {
      if (newHero) {
        this.heroes.push(newHero);
      }
    }
  }
```


## Template-Driven Forms ##

There are 3 parts for this sample.

* The `Component`
* The `HTML & CSS`
* Any model classes and directives.

The `@Component` is a simple wrapper linking the html and handling the submission.

The `HTML & CSS` format and wrap the form using bindings discussed previously.

The `model class` is the hero object. This acts as class for new instances created by the form.

`ngForm` and `ngSubmit` 

These are directives designed to replace `<form>` and `onSubmit` event handlers. 

## Form Validation ##

In the previous exercise you created a form with some crude validation. Now i'd like you to take a 
look at Angular's built in validation.

```typescript
ngOnInit(): void {
  this.heroForm = new FormGroup({
    'name': new FormControl(this.hero.name, [
      Validators.required,
      Validators.minLength(4),
      forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
    ]),
    'alterEgo': new FormControl(this.hero.alterEgo),
    'power': new FormControl(this.hero.power, Validators.required)
  });
}

get name() { return this.heroForm.get('name'); }

get power() { return this.heroForm.get('power'); }

```

Some CSS classes added to form elements:

* .ng-valid - is valid
* .ng-invalid - is invalid
* .ng-pending - async not fulfilled
* .ng-pristine - control hasn't been touched
* .ng-dirty - has been touched
* .ng-untouched - hasn't been blurred
* .ng-touched - been blurred

## Reactive Forms ##

These are different than template driven forms. These are `synchronous` whereas Template Driven Forms are `asynchronous`.

### Template Driven Approach

```html

<input id="name" name="name" class="form-control"
       required minlength="4" forbiddenName="bob"
       [(ngModel)]="hero.name" #name="ngModel" >

```

* Simple like Angular1
* Can get messy in larger applications and complicated forms.

### Ractive Approach ###

It's a way to construct the logic of your forms outside of mark-up.

* More Complicated
* Easier to Unit-Test

```html
<form [formGroup]="reactiveForm">
    <label>Name
    <input type="text" formControlName="name">
    </label>
</form>
```

```typescript
//...
constructor(private fb: FormBuilder) {
    this.reactiveForm = fb.group({
      'name': [null, Validators.compose([Validators.required, Validators.minLength(4)
    });
}
//...
```

## Exercise ##

1. Take the application you created in the previous example and use a  `template driven form`
with `ngSubmit` and `ngForm`.
2. Create a `reactive form` using `FormBuilder` and `FormControls` 

## Bonus / Work-Ahead ##

Take the `reactive form` you've created and make it dynamic using this reference:
[https://angular.io/guide/dynamic-form](https://angular.io/guide/dynamic-form)
