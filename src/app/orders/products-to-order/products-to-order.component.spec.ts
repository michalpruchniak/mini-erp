import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsToOrderComponent } from './products-to-order.component';

describe('ProductsToOrderComponent', () => {
  let component: ProductsToOrderComponent;
  let fixture: ComponentFixture<ProductsToOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsToOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsToOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
