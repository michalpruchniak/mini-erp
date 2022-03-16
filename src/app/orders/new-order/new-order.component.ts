import { Component } from '@angular/core';
import { ClientService } from 'src/app/clients/client.service';
import { OrderService } from '../order.service';
import { Order } from '../order';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent {
  constructor(
    public clientService: ClientService,
    private orderService: OrderService,
  ) { }

  addOrder(order: any){
    this.orderService.addOrder(order as Order)
      .subscribe(() => {
        console.log('The order was added');
      })
  }

}
