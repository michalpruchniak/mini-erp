import { Component, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import productsToOrderForms from 'src/app/orders/productsToOrderForms';
import { ProductService } from 'src/app/products/product.service';
import { EventEmitter } from '@angular/core';
import { ProductsToOrder } from 'src/app/orders/products-to-order/ProductsToOrder';

@Component({
  selector: 'app-forms-add-product-to-order',
  templateUrl: './forms-add-product-to-order.component.html',
  styleUrls: ['./forms-add-product-to-order.component.css']
})
export class FormsAddProductToOrderComponent {
  @Output() formData = new EventEmitter<any>();
  @Output() newItemEvent = new EventEmitter<string>();


  productForm = this.fb.group(productsToOrderForms)

  constructor(
    public productService: ProductService,
    private fb: FormBuilder
  ) { }

  onProductChange(p: any){
    this.productService.getProduct(p.target.value)
      .subscribe(product => {
        this.productForm.controls['price']
          .setValue(product.price);

        this.productForm.controls['amount']
          .setValue(1);

      })
  }

  onAmountChange(amount: any){
    // const price = this.productForm.controls['price'];
    // price.setValue(amount.target.value * price.value);

    // It won't update price in input
    //It will update summary if make then.
  }

  onSubmit(){
    this.formData.emit(this.productForm.value);
    this.productForm.reset();
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
