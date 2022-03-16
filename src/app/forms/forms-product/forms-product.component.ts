import { Location } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product } from 'src/app/products/product';
import productsForms from 'src/app/products/productsForms';

@Component({
  selector: 'app-forms-product',
  templateUrl: './forms-product.component.html',
  styleUrls: ['./forms-product.component.css']
})
export class FormsProductComponent implements OnInit {

  @Output() formData = new EventEmitter<Product>();

  productForm = this.fb.group(productsForms)

  constructor(
    private fb: FormBuilder,
    private location: Location
  ) { }

  onSubmit():void{
    this.formData.emit(this.productForm.value)
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
  }

}
