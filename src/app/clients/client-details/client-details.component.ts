import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../client.service';
import { Client } from '../client'

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

  updateClient(client: Client){
    this.clientService.updateClient(client)
      .subscribe(() => {
        this.clientService.update(client, this.clientID);
      })
  }
}
