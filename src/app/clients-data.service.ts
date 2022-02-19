import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class ClientsDataService implements InMemoryDbService{

  createDb(){
    const clients = [
      {
        id: 1,
        name: 'Jan Kowalski',
      },
      {
        id: 2,
        name: 'Jan Nowak'
      },
      {
        id: 3,
        name: 'Marian Stefański',
      },
    ];
    return { clients };
}
  constructor() { }
}
