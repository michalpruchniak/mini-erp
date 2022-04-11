import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewProductToOrderComponent } from './add-new-product-to-order.component';

describe('AddNewProductToOrderComponent', () => {
  let component: AddNewProductToOrderComponent;
  let fixture: ComponentFixture<AddNewProductToOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewProductToOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewProductToOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
