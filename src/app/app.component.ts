import { Component, OnInit } from '@angular/core';
import { ClientService } from './clients/client.service';
import { OrderService } from './orders/order.service';
import { ProductService } from './products/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  constructor(
    private clientService: ClientService,
    private orderService: OrderService,
    private productService: ProductService
  ) { }

  ngOnInit(){
    this.clientService.getClients();
    this.orderService.getOrders();
    this.productService.getProducts();
  }
}
