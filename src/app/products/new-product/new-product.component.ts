import { Component} from '@angular/core';
import { Product } from '../Product';
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

  addProduct(product: Product): void{
      this.productService.addProduct(product as Product)
        .subscribe(() => {
          // console.log(product)
        })
  }

}
