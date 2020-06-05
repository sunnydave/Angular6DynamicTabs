import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {SalesPersonService} from '../services/sales-person.service';
import {TabService} from '../services/tab.service';
import {Customer} from '../models/customer';
import {SalesPerson} from '../models/sales-person';

@Component({
  selector: 'app-sales-person-create',
  templateUrl: './sales-person-create.component.html',
  styleUrls: ['./sales-person-create.component.scss']
})
export class SalesPersonCreateComponent implements OnInit {
  @Input() data;
  salesPersonForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required]
  });
  pageTitle = 'Add Sales Person';

  constructor(private salesPersonService: SalesPersonService, private tabService: TabService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    if (this.data.formData){
      this.salesPersonForm.patchValue({
        name: this.data.formData.name,
        email: this.data.formData.email
      });
      this.pageTitle = 'Edit Sales Person : ' + this.data.formData._id;
    }
  }

  onSaveSalesPerson(): void {
    const salesPerson = new SalesPerson();
    const data = this.salesPersonForm.value;
    salesPerson.name = data.name;
    salesPerson.email = data.email;
    this.salesPersonService.saveSalesPerson(salesPerson).subscribe(
      response => {this.tabService.removeTab(data.tabIndex); },
      error => console.error(error)
    );
  }

}
