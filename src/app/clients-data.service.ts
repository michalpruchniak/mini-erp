import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientsDataService implements InMemoryDbService{

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
    return { clients };
  }

  genId(clients: Client[]): number {
    return clients.length > 0 ? Math.max(...clients.map(client => client.id)) + 1 : 11;
  }
}
