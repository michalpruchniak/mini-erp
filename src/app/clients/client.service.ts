import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Client } from './client';


@Injectable({
  providedIn: 'root'
})
export class ClientService{

  constructor(
    private http: HttpClient,
  ) { }

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

  add(client: Client): void{
    this.clients.push(client);
  }

  getClient(id: number): Observable<Client> {
    const url = `${this.clientsURL}/${id}}`;
    return this.http.get<Client>(url)
      .pipe(
        catchError(this.handleError<Client>(`getClient id=${id}}`)
      ));
  }

  updateClient(client: Client, id: number): Observable<Client> {
    return this.http.post<Client>(this.clientsURL, client, this.httpOptions).pipe(
      tap((newClient: Client) => this.update(newClient, id)),
      catchError(this.handleError<Client>('addedClient'))
    );
  }

  update(newClient: Client, id: number){
    this.clients[id-1] = newClient;
  }
}