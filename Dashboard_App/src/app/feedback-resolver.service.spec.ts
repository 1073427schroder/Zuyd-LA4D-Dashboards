import { TestBed, inject } from '@angular/core/testing';

import { FeedbackResolverService } from './feedback-resolver.service';

describe('FeedbackResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeedbackResolverService]
    });
  });

  it('should be created', inject([FeedbackResolverService], (service: FeedbackResolverService) => {
    expect(service).toBeTruthy();
  }));
});
