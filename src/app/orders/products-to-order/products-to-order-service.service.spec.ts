import { TestBed } from '@angular/core/testing';

import { ProductsToOrderService } from './products-to-order.service';

describe('ProductsToOrderServiceService', () => {
  let service: ProductsToOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsToOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
