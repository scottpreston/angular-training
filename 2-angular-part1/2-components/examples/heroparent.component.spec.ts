import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroparentComponent } from './heroparent.component';

describe('HeroparentComponent', () => {
  let component: HeroparentComponent;
  let fixture: ComponentFixture<HeroparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
