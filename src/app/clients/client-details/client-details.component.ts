import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/clients/client.service';
import { Location } from '@angular/common'
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent {
  clientID = Number(this.route.snapshot.paramMap.get('id'));

  constructor(
    public clientService: ClientService,
    private route: ActivatedRoute,
  ) { }

  updateClient(client: any){
    this.clientService.updateClient(client)
      .subscribe(() => {
        this.clientService.update(client, this.clientID);
      })
  }
}
