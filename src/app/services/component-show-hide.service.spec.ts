import { TestBed, inject } from '@angular/core/testing';

import { ComponentShowHideService } from './component-show-hide.service';

describe('ComponentShowHideService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentShowHideService]
    });
  });

  it('should be created', inject([ComponentShowHideService], (service: ComponentShowHideService) => {
    expect(service).toBeTruthy();
  }));
});
