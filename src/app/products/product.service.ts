import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  private products: Product[] = [];
  private productsURL = 'api/products';

  httpOptions = {
    hreaders: new HttpHeaders({'Content-Type': 'application/json'})
  };

  private handleError<T>(operation = 'operation', result? :T){
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    }
  }

  fetchProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.productsURL)
  }

  getProducts(): void {
    this.fetchProducts()
      .subscribe(product => {
        this.products = product;
      })
  }

  allProducts(): Product[]{
    return this.products;
  }

}
