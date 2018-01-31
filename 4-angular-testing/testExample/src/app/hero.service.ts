import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HeroserviceService {

  constructor(private http: Http) {

  }

  public fetchHeros() {
    return this.http.get('http://localhost:3000/tweets')
  }

}
