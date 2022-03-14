import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../order.service';
import { Location } from '@angular/common'
import { ClientService } from 'src/app/clients/client.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  constructor(
    public clientService: ClientService,
    private fb: FormBuilder,
    private orderService: OrderService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  private id = Number(this.route.snapshot.paramMap.get('id'));

  updateOrderForm = this.fb.group({
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

  getorder(): void {
    this.orderService.getOrder(this.id)
      .subscribe(order => this.updateOrderForm.patchValue(order));
  }

  onClientChange(c: any){
    this.clientService.getClient(c.target.value)
      .subscribe(client => {
        const number = !client.flatNumber ?
                        client.streetNumber :
                        client.streetNumber + '\\' + client.flatNumber;
        this.updateOrderForm.controls['address']
          .setValue(`${client.city} ${number}`);

          this.updateOrderForm.controls['phone']
          .setValue(client.phoneNumber !== undefined ? `${client.phoneNumber}`: '');
      })
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.getorder();
  }

}
