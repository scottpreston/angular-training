# Using Jasmine w/Angular #


## The Basics ## 

There's a few steps different than the Jasmine examples you used previously because
of the Angular SPA architecture.

1. You need to have a `beforeEach` block to compile the angular app/component.

```typescript
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
```

2. You need to create your `component` via the test bed as a `fixture`.

```typescript
const fixture = TestBed.createComponent(AppComponent);
fixture.detectChanges();
const compiled = fixture.debugElement.nativeElement;
expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
```

3. To force detection of changes we call `fixture.detectChanges();`
4. Compile the changes
5. Expect the result via a selector.