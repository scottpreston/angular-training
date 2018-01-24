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

## Mocks, Directives and HTTP ##

A component-under-test doesn't have to be injected with real services. 
In fact, it is usually better if they are `test doubles` (stubs, fakes, spies, or mocks). 
The purpose of the spec is to test the component,not the service, and real services can be trouble.

### Mocks ###

Use the `providers` section to inject the mock `userServiceStub`.

```typescript
beforeEach(() => {
  // stub UserService for test purposes
  userServiceStub = {
    isLoggedIn: true,
    user: { name: 'Test User'}
  };

  TestBed.configureTestingModule({
     declarations: [ WelcomeComponent ],
     providers:    [ {provide: UserService, useValue: userServiceStub } ]
  });

  fixture = TestBed.createComponent(WelcomeComponent);
  comp    = fixture.componentInstance;

  // UserService from the root injector
  userService = TestBed.get(UserService);

  //  get the "welcome" element by CSS selector (e.g., by class name)
  de = fixture.debugElement.query(By.css('.welcome'));
  el = de.nativeElement;
});
```

### Directives ###

For directives you ned to trigger events or trigger the UI into simulating the action. For
our `hover` directive. See the following:

```typescript
it('hovering over input', () => {
  let inputEl = fixture.debugElement.query(By.css('input'));
  inputEl.triggerEventHandler('mouseover', null); 
  fixture.detectChanges();
  expect(inputEl.nativeElement.style.backgroundColor).toBe('blue'); 

  inputEl.triggerEventHandler('mouseout', null);
  fixture.detectChanges();
  console.log(inputEl.nativeElement.style.backgroundColor);
  expect(inputEl.nativeElement.style.backgroundColor).toBe('inherit');
});
```

### Http ###

Look at the example component. 

```typescript
@Component({
  selector: 'twain-quote',
  template: '<p class="twain"><i>{{quote}}</i></p>'
})
export class TwainComponent  implements OnInit {
  intervalId: number;
  quote = '...';
  constructor(private twainService: TwainService) { }

  ngOnInit(): void {
    this.twainService.getQuote().then(quote => this.quote = quote);
  }
}
```

In spec:

```typescript
  const testQuote = 'Test Quote';
// Setup spy on the `getQuote` method
  spy = spyOn(twainService, 'getQuote')
        .and.returnValue(Promise.resolve(testQuote));


// get the spy promise and wait for it to resolve
    spy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges(); // update view with quote
      expect(el.textContent).toBe(testQuote);
      done();
    });

```