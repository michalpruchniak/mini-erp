import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsToOrder } from './ProductsToOrder';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsToOrderService {

  constructor(
    private http: HttpClient
  ) { }

    private productsToOrder: ProductsToOrder[] = [];
    private productsToOrderURL = 'api/productsToOrder';

    httpOptions = {
      hreaders: new HttpHeaders({'Content-Type': 'application/json'})
    };

   private handleError<T>(operation = 'operation', result? :T){
     return (error: any): Observable<T> => {
        console.log(error);
      return of(result as T);
      }
  }

  fetchProductsToOrder(): Observable<ProductsToOrder[]>{
    return this.http.get<ProductsToOrder[]>(this.productsToOrderURL).pipe(
      tap(_ => console.log('Hello World'))
    )
  }

  getProductsToOrder(): void{
    this.fetchProductsToOrder()
      .subscribe(product => this.productsToOrder = product)
  }

  allProductsToOrder(): ProductsToOrder[]{
    return this.productsToOrder;
  }

  addProductsToOrder(productsToOrder: ProductsToOrder): Observable<ProductsToOrder> {
    return this.http.post<ProductsToOrder>(this.productsToOrderURL, productsToOrder).pipe(
      tap((newProductsToOrder: ProductsToOrder) => this.add(newProductsToOrder)),
      catchError(this.handleError<ProductsToOrder>('addedProductsToOrder'))
    );
  }

  add(productsToOrder: ProductsToOrder): void {
    this.productsToOrder.push(productsToOrder);
  }

  getProductsFromOrder(id: string) {
    return this.productsToOrder.filter((element) => {
      return element.order_id == parseInt(id);
    });

  }
}

