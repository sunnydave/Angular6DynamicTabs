import { Injectable, EventEmitter } from '@angular/core';
import {Subscription} from 'rxjs';
import {TabItem} from '../models/tab-item';
import {ProductCreateComponent} from '../product-create/product-create.component';
import {CustomerCreateComponent} from '../customer-create/customer-create.component';
import {SalesPersonCreateComponent} from '../sales-person-create/sales-person-create.component';

@Injectable()
export class TabService {
  invokeTabAddFunction = new EventEmitter();
  invokeTabRemoveFunction = new EventEmitter();
  subsVar: Subscription;
  getTabEntity(type: string, tabLabel: string, tabFormData: any): TabItem{
    switch (type) {
      case 'product-create':
        return new TabItem(ProductCreateComponent,
          {label: tabLabel, formData: tabFormData},
          'product-create-' + Math.random());
      case 'product-view':
        return new TabItem(ProductCreateComponent,
          {label: tabLabel, formData: tabFormData},
          'product-view-' + Math.random());
      case 'customer-view':
        return new TabItem(CustomerCreateComponent,
        {label: tabLabel, formData: tabFormData},
        'customer-view-' + Math.random());
      case 'customer-create':
        return new TabItem(CustomerCreateComponent,
          {label: tabLabel, formData: tabFormData},
          'customer-create-' + Math.random());
      case 'sales-person-view':
        return new TabItem(SalesPersonCreateComponent,
          {label: tabLabel, formData: tabFormData},
          'customer-view-' + Math.random());
      case 'sales-person-create':
        return new TabItem(SalesPersonCreateComponent,
          {label: tabLabel, formData: tabFormData},
          'customer-create-' + Math.random());
    }
  }
  addNewTab(type: TabItem): void{
    this.invokeTabAddFunction.emit(type);
  }
  removeTab(index: number): void{
    this.invokeTabRemoveFunction.emit(index);
  }
}
