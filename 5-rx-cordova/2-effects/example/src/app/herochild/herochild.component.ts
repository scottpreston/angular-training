import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {HighlightDirective} from '../highlight.directive';

@Component({
  selector: 'app-herochild',
  templateUrl: './herochild.component.html',
  styleUrls: ['./herochild.component.css']
})
export class HerochildComponent implements OnInit {

  @Input('name') name: string;
  @Input('index') index: number;
  @Output() onVoted = new EventEmitter<boolean>();
  toHighlight : boolean;
  
  vote() {
    this.onVoted.emit(true);
  }
  
  constructor() { 
    
  }

  ngOnInit() {
    this.toHighlight = (this.index % 2 === 0);
  }

}