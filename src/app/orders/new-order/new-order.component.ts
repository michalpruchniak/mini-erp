import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
    private fb: FormBuilder
  ) { }

  addOrderForm = this.fb.group({
    client_id: ['', [Validators.required]],
    courier: ['', [Validators.required]],
    address: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    salesChannel: ['', [Validators.required]],
  });

  onSubmit(){
    this.orderService.addOrder(this.addOrderForm.value as Order)
      .subscribe(() => {
        this.addOrderForm.reset();
      })
  }
}
