import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-herochild',
  templateUrl: './herochild.component.html',
  styleUrls: ['./herochild.component.css']
})
export class HerochildComponent implements OnInit {
  
  @Input('name') name: string;
  
  constructor() { }

  ngOnInit() {
    
  }

}
