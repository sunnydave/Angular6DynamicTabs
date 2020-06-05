import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Product} from '../models/product';

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {
  }

  getProducts() {
    return this.http.get('http://localhost:3000/products');
  }

  saveProduct(product: Product){
    console.log(product);
    return this.http.post('http://localhost:3000/product', product);
  }
}
