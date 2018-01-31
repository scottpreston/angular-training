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