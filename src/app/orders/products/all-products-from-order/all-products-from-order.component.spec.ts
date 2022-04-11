import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductsFromOrderComponent } from './all-products-from-order.component';

describe('AllProductsFromOrderComponent', () => {
  let component: AllProductsFromOrderComponent;
  let fixture: ComponentFixture<AllProductsFromOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllProductsFromOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProductsFromOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
