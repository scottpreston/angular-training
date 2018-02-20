import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HeroserviceService {

  constructor(private http: Http) {
    
   }
  addHero (name: String){
    let msg = {message: name};
    return this.http.post('http://localhost:3000/tweet', msg)
  }
 
  public fetchHeros() {
      return this.http.get('http://localhost:3000/tweets')
  }

}
