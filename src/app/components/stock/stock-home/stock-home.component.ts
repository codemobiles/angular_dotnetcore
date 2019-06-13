import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Product } from 'src/app/models/product.model';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-stock-home',
  templateUrl: './stock-home.component.html',
  styleUrls: ['./stock-home.component.css']
})
export class StockHomeComponent implements OnInit {

  constructor(private restService: RestService) { }

  mProductArray: Product[] = [];

  searchTextChanged = new Subject<string>();

  baseAPIURL = environment.baseAPIURL;

  mOutOfStock: number;

  ngOnInit() {
    this.feedData();

    this.searchTextChanged.pipe(
      debounceTime(10000)
    ).subscribe(term => this.onSearch(term));
  }

  onSearch(term: string) {
      console.log(term);
  }


  feedData() {
    this.restService.getProducts().subscribe(
      data => {
        this.mProductArray = data.result;
      },
      error => {
          alert(JSON.stringify(error));
      }
    );

    this.checkOutOfStock();
  }

  checkOutOfStock() {
    this.restService.getOutOfStock().subscribe(
      data => {
        // console.log(JSON.stringify(data.out_of_stock_product));
        this.mOutOfStock = data.out_of_stock_product;
      },
      error => {
        console.log(JSON.stringify(error));
      }
    );
  }

}
