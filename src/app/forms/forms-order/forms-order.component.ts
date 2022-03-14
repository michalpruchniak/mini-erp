import { Component, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';
import { EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import ordersForm from 'src/app/orders/ordersForm';
import { ClientService } from 'src/app/clients/client.service';
import { Order } from 'src/app/orders/order';
import { OrderService } from 'src/app/orders/order.service';


@Component({
  selector: 'app-forms-order',
  templateUrl: './forms-order.component.html',
  styleUrls: ['./forms-order.component.css']
})
export class FormsOrderComponent implements OnInit{
  @Input() orderID = '';
  @Output() formData = new EventEmitter<Order>();

  constructor(
    public clientService: ClientService,
    private orderService: OrderService,
    private fb: FormBuilder,
    private location: Location,
  ) { }

  orderForm = this.fb.group(ordersForm)

  onSubmit(){
    this.formData.emit(this.orderForm.value);
    this.goBack();
  }

  onClientChange(c: any){
    this.clientService.getClient(c.target.value)
      .subscribe(client => {
        const number = !client.flatNumber ?
                        client.streetNumber :
                        client.streetNumber + '\\' + client.flatNumber;
        this.orderForm.controls['address']
          .setValue(`${client.city} ${number}`);

          this.orderForm.controls['phone']
          .setValue(client.phoneNumber !== undefined ? `${client.phoneNumber}`: '');
      })
  }

  getOrder(): void {
    this.orderService.getOrder(Number(this.orderID))
      .subscribe(order => this.orderForm.patchValue(order));
  }


  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
   this.getOrder();
  }
}
