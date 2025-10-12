import { TestBed } from '@angular/core/testing';

import { ShopStatsService } from './shop-stats.service';

describe('ShopStatsService', () => {
  let service: ShopStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
