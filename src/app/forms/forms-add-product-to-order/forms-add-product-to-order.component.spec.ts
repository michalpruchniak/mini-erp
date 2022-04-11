import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsAddProductToOrderComponent } from './forms-add-product-to-order.component';

describe('FormsAddProductToOrderComponent', () => {
  let component: FormsAddProductToOrderComponent;
  let fixture: ComponentFixture<FormsAddProductToOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsAddProductToOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsAddProductToOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
