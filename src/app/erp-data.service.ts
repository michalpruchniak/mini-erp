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
        city: 'Warszawa',
        streetNumber: 4,
        flatNumber: 10,
        phoneNumber: 555455545
      },
      {
        id: 2,
        name: 'Jan Nowak',
        city: 'Lublin',
        streetNumber: 4,
        flatNumber: 2
      },
      {
        id: 3,
        name: 'Marian Stefański',
        city: 'Zamość',
        streetNumber: 1,
        flatNumber: 1
      },
    ];

    const orders = [
      {
        id: 1,
        courier: 'DPD',
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
