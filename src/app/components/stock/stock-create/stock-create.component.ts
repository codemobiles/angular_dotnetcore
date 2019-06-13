import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.css']
})
export class StockCreateComponent implements OnInit {

  mProduct: Product = new Product();

  constructor(private location: Location) { }

  ngOnInit() {
  }

  submitForm() {
    console.log(this.mProduct.name);
    console.log(this.mProduct.price);
  }

  onClickBack() {
    this.location.back();
  }

}
