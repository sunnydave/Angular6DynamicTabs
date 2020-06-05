import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Product} from '../models/product';
import {SalesPerson} from '../models/sales-person';

@Injectable()
export class SalesPersonService {
  constructor(private http: HttpClient) {
  }

  getSalesPerson() {
    return this.http.get('http://localhost:3000/sales-person');
  }

  saveSalesPerson(salesPerson: SalesPerson){
    return this.http.post('http://localhost:3000/sales-person', salesPerson);
  }
}
