import { TestBed } from '@angular/core/testing';

import { ObserveSearchService } from './observe-search.service';

describe('ObserveSearchService', () => {
  let service: ObserveSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObserveSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
