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
