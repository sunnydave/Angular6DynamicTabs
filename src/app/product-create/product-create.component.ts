import {Component, Input, OnInit} from '@angular/core';
import {ProductsService} from '../services/products.service';
import {TabService} from '../services/tab.service';
import {Product} from '../models/product';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  @Input() data;
  productForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    imageUrl: [''],
    price: [0]
  });
  pageTitle = 'Add New Product';
  constructor(private productsService: ProductsService,
              private tabService: TabService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    if (this.data.formData){
      this.productForm.patchValue({
        name: this.data.formData.name,
        description: this.data.formData.description,
        price: this.data.formData.price
      });
      this.pageTitle = 'Edit Product : ' + this.data.formData._id;
    }
  }

  onSaveProduct(): void {
    console.log(this.productForm.value);
    const data = this.productForm.value;
    const product = new Product();
    product.name = data.name;
    product.description = data.description;
    product.imageUrl = data.imageUrl;
    product.price = data.price;
    this.productsService.saveProduct(product).subscribe(
      response => {this.tabService.removeTab(data.tabIndex); },
      error => console.error(error)
    );
  }
}
