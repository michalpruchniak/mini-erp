import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './Product';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { NewClientComponent } from '../clients/new-client/new-client.component';
import productsForms from './productsForms';

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

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.productsURL, product).pipe(
      tap((newProduct: Product) => this.add(newProduct)),
      catchError(this.handleError<Product>('addedProduct'))
    )
  }

  add(product: Product): void {
    this.products.push(product);
  }

  getProduct(id: number): Observable<Product> {
    const url = `${this.productsURL}/${id}`;
    return this.http.get<Product>(url)
      .pipe(
        catchError(this.handleError<Product>(`getProduct id=${id}}`)
      ));
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put(this.productsURL, product).pipe(
      tap(_ => {
        console.log('updasted product');
        this.update(product, product.id)
      }),
      catchError(this.handleError<any>('updateProduct'))

    )
  }

  update(newProduct: Product, id: number): void {
    newProduct.id = id;

    this.products[id-1] = newProduct;
  }

}
