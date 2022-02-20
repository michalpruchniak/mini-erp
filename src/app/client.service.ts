import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Client } from './client';


@Injectable({
  providedIn: 'root'
})
export class ClientService{

  private clients: Client[] = [];
  private clientsURL = 'api/clients';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
    private handleError<T>(operation = 'operation', result? :T){
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    }
  }

  constructor(
    private http: HttpClient,
  ) { }

  fetchClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientsURL)
  }

  getClients(): void {
     this.fetchClients()
      .subscribe(client => this.clients = client);
  }

  allClients(): Client[] {
    return this.clients;
  }

  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.clientsURL, client, this.httpOptions).pipe(
      tap((newClient: Client) => console.log(newClient)),
      catchError(this.handleError<Client>('addedClient'))
    );

  }

  add(client: Client){
    this.clients.push(client);
  }
}
