import { Component, OnInit } from '@angular/core';
import {CustomersService} from '../services/customers.service';
import {TabService} from '../services/tab.service';
import {Customer} from '../models/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers: Array<Customer>;

  constructor(private customersService: CustomersService, private tabService: TabService) { }

  ngOnInit(): void {
    this.customersService.getCustomers().subscribe(
      data => {
        this.customers = (data as Array<Customer>);
      },
      error => console.log(error)
    );
  }

  addNewCustomer(): void {
    const tabItem = this.tabService.getTabEntity('customer-create', 'Create Customer', null);
    this.tabService.addNewTab(tabItem);
  }

  selectCustomer(index): void {
    const tabItem = this.tabService.getTabEntity('customer-view', this.customers[index]._id, this.customers[index]);
    this.tabService.addNewTab(tabItem);
  }
}
