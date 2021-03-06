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
      tap((newClient: Client) => this.add(newClient)),
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

  updateClient(client: Client): Observable<any> {
    return this.http.put(this.clientsURL, client).pipe(
      tap(_ => {console.log(`updated client id=${client.id}`);
                this.update(client, client.id)
                }),
      catchError(this.handleError<any>('updateClient'))
    );
  }

  update(newClient: Client, id: number){
    newClient.id = id;
    this.clients[id-1] = newClient;
  }
}
