import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/products/product.service';
import { OrderService } from '../order.service';
import { ProductsToOrderService } from './products-to-order.service';
import { ProductsToOrder } from './ProductsToOrder';
@Component({
  selector: 'app-products-to-order',
  templateUrl: './products-to-order.component.html',
  styleUrls: ['./products-to-order.component.css']
})
export class ProductsToOrderComponent implements OnChanges{
  @Input() orderID = '';
  products:any = [];

  constructor(
    public productsToOrderService: ProductsToOrderService,
    private productService: ProductService,
    private orderService: OrderService
  ) { }

  allProductsFromOrder(){
    this.products = [];
    let arr1 = this.productsToOrderService.getProductsFromOrder(this.orderID);
    let arr2 = this.productService.allProducts();
    let arr3 = this.orderService.allOrders();
    let test:any = [];

    arr1.map(element => {
      const product = arr2.find(product => {
        return product.id == element.product_id
      })

        this.products.push({
          product_name: product?.name,
          regular_price: product?.price,
          amount: element.amount ? element.amount : 1,
          price: element.price ? element.price : product?.price,
        })
      });
      console.log(test);
    }

  addProductToOrder(productToOrder: any){
    productToOrder.order_id = this.orderID;
    console.log('Products to order')
    console.log(productToOrder);
    this.productsToOrderService.addProductsToOrder(productToOrder as ProductsToOrder)
      .subscribe(() => {
        console.log('this product was added to the order');
        console.log(productToOrder);
        this.allProductsFromOrder();
        // this.productsToOrderService.fetchProductsToOrder()
        //   .subscribe(element => {
        //     console.log(element);
        //     this.allProductsFromOrder();
        //   })
          });
          console.log('test');
          console.log(this.productsToOrderService.allProductsToOrder);
          console.log('Test');
      }

      ngOnChanges(){
        this.allProductsFromOrder();
      }
  }

