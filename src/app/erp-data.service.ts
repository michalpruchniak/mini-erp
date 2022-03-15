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

    const products = [
      {
        id: 1,
        name: 'Wojna Makowa, tom 1',
        price: 32.99,
        description: 'Kiedy jesteś sierotą wojenną, świat ma dla ciebie głównie pogardę, odrzucenie, brutalność i ból. Czasem, jeśli akurat masz szczęście, obojętność. Jeśli natomiast do tego jesteś dziewczynką, szczęście ma twoja przybrana rodzina. Zawsze może ubić interes i sprzedać cię za żonę jakiemuś zamożnemu staruchowi.'
      },
      {
        id: 2,
        name: 'Republika Smoka, tom 2',
        price: 32.99,
        description: 'Gniew zmieniający duszę w rozszalały ogień, którego nigdy nie da się ugasić. Oto cały świat Rin. Chwyciła los za gardło i wyrwała mu z trzewi swoją przyszłość- dostała się do Akademii Sinegardzkiej a potem dalej, dzień po dniu, walczyła by ją skończyć.'
      },
      {
        id: 3,
        name: 'Płonący Bóg, tom 3',
        price: 32.99,
        description: 'Żyć z dawnymi występkami można jedynie, jeśli ukryje się je w głębokich zakamarkach umysłu, w czarnych odmętach duszy.'
      },
      {
        id: 4,
        name: 'Inkub',
        price: 42.30,
        description: 'Nad Suwalszczyzną za kilka dni pojawi się zorza polarna. W Jodoziorach, małej wiosce na prowincji, zostają znalezione spopielałe zwłoki małżeństwa. Wśród lokalnej społeczności miejsce to owiane jest złą sławą, słynie ze szczególnego nasilenia przemocy, chorób, zaginięć i samobójstw. Mówi się też o zjawiskach nadprzyrodzonych – niezidentyfikowanym zielonym świetle, odgłosach niewiadomego pochodzenia, a także o nawiedzonym domu.'
      },
    ]
    return { clients, orders, products };
  }

  genId(clients: Client[]): number {
    return clients.length > 0 ? Math.max(...clients.map(client => client.id)) + 1 : 11;
  }
}
