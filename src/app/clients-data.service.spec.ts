import { TestBed } from '@angular/core/testing';

import { ErpDataService } from './erp-data.service';

describe('ErpDataService', () => {
  let service: ErpDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErpDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
