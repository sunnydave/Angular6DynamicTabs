import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../services/products.service';
import {Product} from '../models/product';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {TabService} from '../services/tab.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Array<Product>;
  loading: boolean;
  filter = new FormControl('');

  constructor(private productsService: ProductsService, private tabService: TabService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(
      data => {
        console.table(data);
        this.products = (data as Array<Product>);
        },
      error => console.error(error),
      () => this.loading = true
    );
  }

  addNewProduct(): void {
    const tabItem = this.tabService.getTabEntity('product-create', 'Create Product', null);
    this.tabService.addNewTab(tabItem);
  }

  selectProduct(index): void {
    const tabItem = this.tabService.getTabEntity('product-view', this.products[index]._id, this.products[index]);
    this.tabService.addNewTab(tabItem);
  }

}
