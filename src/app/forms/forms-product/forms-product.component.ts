import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product } from 'src/app/products/product';
import { ProductService } from 'src/app/products/product.service';
import productsForms from 'src/app/products/productsForms';

@Component({
  selector: 'app-forms-product',
  templateUrl: './forms-product.component.html',
  styleUrls: ['./forms-product.component.css']
})
export class FormsProductComponent implements OnInit {
  @Input() productID =''
  @Output() formData = new EventEmitter<Product>();

  productForm = this.fb.group(productsForms)

  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private location: Location
  ) { }

  onSubmit(): void{
    this.formData.emit(this.productForm.value)
    this.goBack();
  }

  getProduct(): void {
    this.productService.getProduct(Number(this.productID))
      .subscribe(product => this.productForm.patchValue(product))
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.getProduct();
  }

}
