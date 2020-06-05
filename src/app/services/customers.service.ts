import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Product} from '../models/product';
import {Customer} from '../models/customer';

@Injectable()
export class CustomersService {
  constructor(private http: HttpClient) {
  }

  getCustomers() {
    return this.http.get('http://localhost:3000/customers');
  }

  saveCustomer(customer: Customer){
    return this.http.post('http://localhost:3000/customer', customer);
  }
}
