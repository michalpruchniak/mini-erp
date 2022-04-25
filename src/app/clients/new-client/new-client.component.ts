import { Component } from '@angular/core';
import { ClientService } from 'src/app/clients/client.service';
import { Client } from 'src/app/clients/client';
@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent {

  constructor(
    private clientService: ClientService,
  ) { }

  addClient(client: Client){
    this.clientService.addClient(client as Client)
      .subscribe(() => {
        console.log('The client was added');
      })
  }
}
