import { TestBed, inject } from '@angular/core/testing';

import { RiaService } from './ria.service';

describe('RiaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RiaService]
    });
  });

  it('should be created', inject([RiaService], (service: RiaService) => {
    expect(service).toBeTruthy();
  }));
});
