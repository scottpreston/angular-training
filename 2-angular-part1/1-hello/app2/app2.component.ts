import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { User } from './user'

@Component({
  selector: 'my-app',
  templateUrl: './app2/hello.html'
})

export class AppComponent2 {
  name = 'world';
  users: User[] = [];
  constructor(http: Http) {
    var that = this;
    this.users = [];
    http.get('./data.json')
    .subscribe(result => that.users = result.json().list);
  }
}
