import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  productID = Number(this.route.snapshot.paramMap.get('id'));

  constructor(
    public productService: ProductService,
    private route: ActivatedRoute
  ) { }

  updateProduct(product: any){
    this.productService.updateProduct(product)
      .subscribe(() => {
        this.productService.update(product, this.productID);
      })
  }

}
