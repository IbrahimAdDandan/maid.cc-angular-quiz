import { TestBed } from '@angular/core/testing';

import { CacheHttpService } from './cache-http.service';

describe('CacheHttpService', () => {
  let service: CacheHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CacheHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
