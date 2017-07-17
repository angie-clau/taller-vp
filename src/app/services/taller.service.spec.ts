import { TestBed, inject } from '@angular/core/testing';

import { TallerService } from './taller.service';

describe('TallerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TallerService]
    });
  });

  it('should be created', inject([TallerService], (service: TallerService) => {
    expect(service).toBeTruthy();
  }));
});
