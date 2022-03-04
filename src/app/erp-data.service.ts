import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Client } from './clients/client';

@Injectable({
  providedIn: 'root'
})
export class ErpDataService implements InMemoryDbService{

  createDb(){
    const clients = [
      {
        id: 1,
        name: 'Jan Kowalski',
        city: 'Lublin',
        streetNumber: 4,
        flatNumber: 12
      },
      {
        id: 2,
        name: 'Jan Nowak',
        city: 'Lublin',
        streetNumber: 4,
        flatNumber: 12
      },
      {
        id: 3,
        name: 'Marian Stefański',
        city: 'Lublin',
        streetNumber: 4,
        flatNumber: 12
      },
    ];

    const orders = [
      {
        id: 1,
        client_id: 1,
        address: 'Lublin 4/12',
        salesChannel: 'shop online'
      }
    ];
    return { clients, orders };
  }

  genId(clients: Client[]): number {
    return clients.length > 0 ? Math.max(...clients.map(client => client.id)) + 1 : 11;
  }
}
