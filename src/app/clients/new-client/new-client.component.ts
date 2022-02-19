import { Component } from '@angular/core';
import { ClientService } from 'src/app/client.service';
import { Client } from 'src/app/client';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent {

  constructor(
    private clientService: ClientService
  ) { }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.clientService.addClient({ name } as Client)
      .subscribe(client => {
        this.clientService.add(client);
      });
  }
}
