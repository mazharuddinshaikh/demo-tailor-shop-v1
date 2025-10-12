import { TestBed } from '@angular/core/testing';

import { DressStatsService } from './dress-stats.service';

describe('DressStatsService', () => {
  let service: DressStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DressStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
