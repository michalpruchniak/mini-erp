import { Component, Input, OnChanges } from '@angular/core';
import { ProductService } from 'src/app/products/product.service';
import { ProductsToOrderService } from './products-to-order.service';
import { ProductsToOrder } from './ProductsToOrder';
import { productsListFromOrder } from './productsListFromOrder';
import { Product } from '../../products/Product'

@Component({
  selector: 'app-products-to-order',
  templateUrl: './products-to-order.component.html',
  styleUrls: ['./products-to-order.component.css']
})
export class ProductsToOrderComponent implements OnChanges{
  @Input() orderID = '';
  products:productsListFromOrder[] = [];

  constructor(
    public productsToOrderService: ProductsToOrderService,
    private productService: ProductService
  ) { }

  allProductsFromOrder(): void{
      this.products = [];
      let productsToOrder = this.productsToOrderService.getProductsFromOrder(this.orderID);
      let allProducts = this.productService.allProducts();

      productsToOrder.map(element => {
        const product = allProducts.find(product => {
          return product.id == element.product_id
        }) as Product

        this.products.push({
          product_name: product.name!,
          regular_price: product.price!,
          amount: element.amount ? parseInt(element.amount) : 1,
          price: element.price ? parseFloat(element.price!) : product?.price!,
        })
      });
    }

  addProductToOrder(productToOrder: ProductsToOrder): void{
    productToOrder.order_id = parseInt(this.orderID);
    this.productsToOrderService.addProductsToOrder(productToOrder as ProductsToOrder)
      .subscribe(() => {
        this.allProductsFromOrder();
      });
    }

    ngOnChanges(){
      this.allProductsFromOrder();
    }
  }

