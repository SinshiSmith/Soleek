import { PRODUCTS } from './mock-products';
import { Product } from './product';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Product[] {
    return PRODUCTS;
  }
}
