import { Component } from '@angular/core';

@Component({
    template: `
      <h1 [innerHTML]="title"></h1>
      `
  })
  
  export class AppComponent {
    title = 'Tour of Heroes';
  }