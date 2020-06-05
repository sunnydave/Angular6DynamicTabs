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
    return this.http.get('https://nerdy-sales-backend.herokuapp.com/customers');
  }

  saveCustomer(customer: Customer){
    return this.http.post('https://nerdy-sales-backend.herokuapp.com/customer', customer);
  }
}
