import { TestBed, inject } from '@angular/core/testing';

import { HeroserviceService } from './heroservice.service';

describe('HeroserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroserviceService]
    });
  });

  it('should be created', inject([HeroserviceService], (service: HeroserviceService) => {
    expect(service).toBeTruthy();
  }));
});
