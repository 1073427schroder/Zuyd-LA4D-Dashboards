import { TestBed, inject } from '@angular/core/testing';

import { ChangesServiceService } from './changes-service.service';

describe('ChangesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangesServiceService]
    });
  });

  it('should be created', inject([ChangesServiceService], (service: ChangesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
