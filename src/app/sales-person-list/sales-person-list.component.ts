import { Component, OnInit } from '@angular/core';
import {SalesPersonService} from '../services/sales-person.service';
import {TabService} from '../services/tab.service';
import {SalesPerson} from '../models/sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.scss']
})
export class SalesPersonListComponent implements OnInit {

  salesPeople: Array<SalesPerson>;

  constructor(private salesPersonService: SalesPersonService, private tabService: TabService) { }

  ngOnInit(): void {
    this.salesPersonService.getSalesPerson().subscribe(
      data => {
        this.salesPeople = (data as Array<SalesPerson>);
      },
      error => console.log(error)
    );
  }

  addNewSalesPerson(): void {
    const tabItem = this.tabService.getTabEntity('sales-person-create', 'New Sales Person', null);
    this.tabService.addNewTab(tabItem);
  }

  selectSalesPerson(index): void {
    const tabItem = this.tabService.getTabEntity('sales-person-view', this.salesPeople[index]._id, this.salesPeople[index]);
    this.tabService.addNewTab(tabItem);
  }

}
