import { TestBed, inject } from '@angular/core/testing';

import { HeroEffectsService } from './hero-effects.service';

describe('HeroEffectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroEffectsService]
    });
  });

  it('should be created', inject([HeroEffectsService], (service: HeroEffectsService) => {
    expect(service).toBeTruthy();
  }));
});
