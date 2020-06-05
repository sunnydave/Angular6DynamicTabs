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
    return this.http.get('https://nerdy-sales-backend.herokuapp.com/products');
  }

  saveProduct(product: Product){
    console.log(product);
    return this.http.post('https://nerdy-sales-backend.herokuapp.com/product', product);
  }
}
