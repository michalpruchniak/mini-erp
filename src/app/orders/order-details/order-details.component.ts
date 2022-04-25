import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../order.service';
import { ClientService } from 'src/app/clients/client.service';
import { Order } from '../order'

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {
  orderID = Number(this.route.snapshot.paramMap.get('id'));

  constructor(
    public clientService: ClientService,
    private orderService: OrderService,
    private route: ActivatedRoute,
  ) { }

  updateOrder(order: Order){
    this.orderService.updateOrder(order)
      .subscribe(() => {
        this.orderService.update(order, this.orderID);
      })
  }

}
