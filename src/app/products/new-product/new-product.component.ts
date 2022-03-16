import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {

  constructor(
    private productService: ProductService
  ) { }

  addProduct(product: any){
      this.productService.addProduct(product as Product)
        .subscribe(() => {

          console.log(product)
        })
  }

}
