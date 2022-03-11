import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ClientService } from 'src/app/clients/client.service';
import { OrderService } from '../order.service';
import { Order } from '../order';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent {

  constructor(
    public clientService: ClientService,
    private orderService: OrderService,
    private fb: FormBuilder,
    private location: Location
  ) { }

  addOrderForm = this.fb.group({
    client_id: ['', [Validators.required]],
    courier: ['', [Validators.required]],
    address: ['', [Validators.required,
                   Validators.minLength(6)
                  ]],
    phone: ['', [Validators.required,
                 Validators.pattern('[+0-9]{9,12}')
                ]
           ],
    salesChannel: ['', [Validators.required]],
  });

  onSubmit(){
    this.orderService.addOrder(this.addOrderForm.value as Order)
      .subscribe(() => {
        this.addOrderForm.reset();
      })
  }

  onClientChange(c: any){
    this.clientService.getClient(c.target.value)
      .subscribe(client => {
        const number = !client.flatNumber ?
                        client.streetNumber :
                        client.streetNumber + '\\' + client.flatNumber;
        this.addOrderForm.controls['address']
          .setValue(`${client.city} ${number}`);

          this.addOrderForm.controls['phone']
          .setValue(client.phoneNumber !== undefined ? `${client.phoneNumber}`: '');
      })
  }
  goBack(): void {
    this.location.back();
  }
}
