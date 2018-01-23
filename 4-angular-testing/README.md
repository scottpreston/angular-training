# Angular Testing #

Testing Angular is comprised of 2 parts:

* Unit Testing - Testing your code at a component level.
* End 2 End (e2e) - Testing your code end-to-end.

These test are run in actual browsers. Unit testing is run inside a browser via 
`Karma`. [https://karma-runner.github.io/2.0/index.html](https://karma-runner.github.io/2.0/index.html)

Karma is a test runner that launchs and runs your test inside separate browser windows provided 
they are installed on your computer.

To do a quick start with testing we will create a new project:

## Unit Test Quick Start ##

```bash
ng new testExample
cd testExample
ng test
ng test --code-coverage
```
Generated Unit Test

```typescript
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});

```

## e2e Test Quick Start ##

```bash
ng e2e
```
Page Object Pattern - Access Elements

```typescript
import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
```

Generated Protractor `e2e` Test - Walk Through A Process

```typescript
import { AppPage } from './app.po';

describe('test-example App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
```
