import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from './order';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient
  ) { }

  private orders: Order[] = [];
  private ordersURL = 'api/orders';

  httpOptions = {
    hreaders: new HttpHeaders({'Content-Type': 'application/json'})
  };
   private handleError<T>(operation = 'operation', result? :T){
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    }
  }

  fetchOrders(): Observable<Order[]>{
    return this.http.get<Order[]>(this.ordersURL)
  }

  getOrders(): void {
    this.fetchOrders()
      .subscribe(order => {this.orders = order; console.log(this.orders)});
  }

  allOrders(): Order[]{
    return this.orders;
  }
}
