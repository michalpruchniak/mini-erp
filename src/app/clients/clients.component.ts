import { Component, OnInit } from '@angular/core';
import { ClientService } from './client.service';
import { Client } from './client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {

  constructor(
    public clientService: ClientService
  ) { }

  add(name: string): void {
    name = name.trim();
    if(!name) { return; }
    this.clientService.addClient({name} as Client)
      .subscribe(client => {
        this.clientService.add(client);
      })
  }
}
