import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Product } from 'src/app/models/product.model';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

import { debounceTime } from 'rxjs/operators';
import Swal from 'sweetalert2';

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
      debounceTime(1000)
    ).subscribe(term => this.onSearch(term));
  }

  onSearch(term: string) {

    if (term == null || term === '') {
      this.feedData();
      return;
    }
    this.restService.searchProducts(term).subscribe(
      data => {
        this.mProductArray = data.result;
      },
      error => {
        alert(JSON.stringify(error));
      }
    );
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

  deleteProduct(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async result => {
      this.restService.deleteProduct(id).subscribe(
        data => {
            alert(data.message);
            this.feedData();
        },
        error => {
          alert(error);
        }
      );
    });
  }

}
