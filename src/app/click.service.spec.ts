import { TestBed, inject } from '@angular/core/testing';

import { ClickServiceService } from './click-service.service';

describe('ClickServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClickServiceService]
    });
  });

  it('should be created', inject([ClickServiceService], (service: ClickServiceService) => {
    expect(service).toBeTruthy();
  }));
});
