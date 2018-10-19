import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PRODUCTS } from './mock-products';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private http: HttpClient, ) { }

  private productsUrl = 'api/products';
  
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
  }
}
