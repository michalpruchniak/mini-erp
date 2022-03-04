import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientService } from './clients/client.service';
import { OrderService } from './orders/order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  constructor(
    private clientService: ClientService,
    private orderService: OrderService
  ) { }
  ngOnInit(){
    this.clientService.getClients();
    this.orderService.getOrders();
  }
}
