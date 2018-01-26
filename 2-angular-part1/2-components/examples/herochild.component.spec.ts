import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerochildComponent } from './herochild.component';

describe('HerochildComponent', () => {
  let component: HerochildComponent;
  let fixture: ComponentFixture<HerochildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerochildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerochildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
