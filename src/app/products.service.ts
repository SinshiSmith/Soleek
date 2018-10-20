import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Product } from './product';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private http: HttpClient, ) { }

  private productsUrl = 'api/products';

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
                .pipe(
                  catchError(this.handleError('getProducts', []))
                );
  }

  getProduct(id: number): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      catchError(this.handleError<Product>(`getProduct id=${id}`))
    );
  }
  
  updareProduct(product: Product): Observable<any> {
    return this.http.put(this.productsUrl, product, httpOptions).pipe(
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  addProduct(product: Product) : Observable<Product> {
    return this.http.post<Product>(this.productsUrl, product, httpOptions).pipe(
      catchError(this.handleError<Product>('addProduct'))
    );
  }

  deleteProduct (product: Product | number): Observable<Product> {
    const id = typeof product === 'number' ? product : product.id;
    const url = `${this.productsUrl}/${id}`;

    return this.http.delete<Product>(url, httpOptions).pipe(
      catchError(this.handleError<Product>('deleteProduct'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
   
      return of(result as T);
    };
  }
}
