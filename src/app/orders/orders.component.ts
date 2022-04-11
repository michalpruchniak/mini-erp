import { Component } from '@angular/core';
import { OrderService } from './order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  orderID = 0;
  card = '';

  constructor(
    public orderService: OrderService
  ) { }

  products(id: number){
    this.orderID = id;
    this.card = 'products';
  }
}
