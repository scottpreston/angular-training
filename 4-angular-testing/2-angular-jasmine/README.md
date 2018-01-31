# Using Jasmine w/Angular #

Lets review the specs in our `testExample`.

## App Component ## 

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

## Directive ##

```typescript
import { HighlightDirective } from './highlight.directive';

import { Component, DebugElement }   from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';


@Component({
  template: `<h2 appHighlight>Test Highlight</h2>`
})
class TestComponent { }

describe('HighlightDirective', () => {

  let fixture: ComponentFixture<TestComponent>;
  let h2Elt: DebugElement;  // the three elements w/ the directive
  
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ HighlightDirective, TestComponent ]
    })
    .createComponent(TestComponent);

    fixture.detectChanges(); // initial binding

    // all elements with an attached HighlightDirective
    h2Elt = fixture.debugElement;
    //console.log(fixture)

  });

  // color tests
  it('should change background to yellow', () => {
    console.log(h2Elt.nativeElement.firstChild)
    const bgColor = h2Elt.nativeElement.firstChild.style.backgroundColor;
    expect(bgColor).toBe('yellow');
  });

});


```

## Service ## 

```typescript
import {
  async, inject, TestBed
} from '@angular/core/testing';

import {
  MockBackend,
  MockConnection
} from '@angular/http/testing';

import {
  HttpModule, Http, XHRBackend, Response, ResponseOptions
} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

const makeHeroData = () => ['Iron Man', 'Thor'];

import { HeroserviceService } from './hero.service';
describe('Http-HeroService (mockBackend)', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        HeroserviceService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    })
      .compileComponents();
  }));

  describe('HeroserviceService.fetchHeros', () => {
    let backend: MockBackend;
    let service: HeroserviceService;
    let fakeHeroes: string[];
    let response: Response;

    beforeEach(inject([Http, XHRBackend], (http: Http, be: MockBackend) => {
      backend = be;
      service = new HeroserviceService(http);
      fakeHeroes = makeHeroData();
      let options = new ResponseOptions({ status: 200, body: { data: fakeHeroes } });
      response = new Response(options);
    }));

    it('should have expected fake heroes (then)', async(inject([], () => {
      backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

      service.fetchHeros().toPromise()
      // .then(() => Promise.reject('deliberate'))
        .then(heroes => {
          let json = heroes.json();
          expect(json.data.length).toBe(fakeHeroes.length,
            'should have expected no. of heroes');
        });
    })));
  });

});
```