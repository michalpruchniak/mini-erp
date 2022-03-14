import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsOrderComponent } from './forms-order.component';

describe('FormsOrderComponent', () => {
  let component: FormsOrderComponent;
  let fixture: ComponentFixture<FormsOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
