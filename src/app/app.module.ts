import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductListComponent } from './product-list/product-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { SalesPersonListComponent } from './sales-person-list/sales-person-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ProductsService} from './services/products.service';
import {TabService} from './services/tab.service';
import { ProductCreateComponent } from './product-create/product-create.component';
import { TabDirectiveDirective } from './tab-directive.directive';
import { DynamicTabComponent } from './dynamic-tab/dynamic-tab.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { SalesPersonCreateComponent } from './sales-person-create/sales-person-create.component';
import {CustomersService} from './services/customers.service';
import {SalesPersonService} from './services/sales-person.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CustomerListComponent,
    SalesPersonListComponent,
    ProductCreateComponent,
    TabDirectiveDirective,
    DynamicTabComponent,
    CustomerCreateComponent,
    SalesPersonCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ProductsService, TabService, CustomersService, SalesPersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
