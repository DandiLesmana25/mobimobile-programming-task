import { TestBed } from '@angular/core/testing';

import { TrackingLocServiceService } from './tracking-loc-service.service';

describe('TrackingLocServiceService', () => {
  let service: TrackingLocServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackingLocServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
