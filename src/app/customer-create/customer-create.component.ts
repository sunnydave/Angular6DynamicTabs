import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {CustomersService} from '../services/customers.service';
import {TabService} from '../services/tab.service';
import {Product} from '../models/product';
import {Customer} from '../models/customer';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent implements OnInit {
  @Input() data;
  pageTitle = 'Add New Customer';
  customerForm = this.formBuilder.group({
    name: ['', Validators.required]
  });

  constructor(private customersService: CustomersService, private tabService: TabService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    if (this.data.formData){
      this.customerForm.patchValue({
        name: this.data.formData.name
      });
      this.pageTitle = 'Edit Customer : ' + this.data.formData._id;
    }
  }

  onSaveCustomer(): void {
    const customer = new Customer();
    const data = this.customerForm.value;
    customer.name = data.name;
    this.customersService.saveCustomer(customer).subscribe(
      response => {this.tabService.removeTab(data.tabIndex); },
      error => console.error(error)
    );
  }

}
