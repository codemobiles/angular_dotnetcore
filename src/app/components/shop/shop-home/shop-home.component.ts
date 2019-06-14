import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { RestService } from 'src/app/services/rest.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-shop-home',
  templateUrl: './shop-home.component.html',
  styleUrls: ['./shop-home.component.css']
})
export class ShopHomeComponent implements OnInit {

  mProductArray: Product[];
  mOrderArray: Product[] = new Array<Product>();

  mIsPaymentShow = false;

  baseAPIURL = environment.baseAPIURL;

  mTotalPrice = 0;

  constructor(private restService: RestService) { }

  ngOnInit() {
    this.feedData();
  }

  feedData() {
    this.restService.getProducts().subscribe(
      data => {
        this.mProductArray = data.result;
      },
      error => { }
    );
  }

  onClickAddOrder(item: Product) {
    const foundIndex = this.mOrderArray.indexOf(item);

    if (foundIndex === -1) {
      item.qty = 1;
      this.mOrderArray.unshift(item);
    } else {
      item.qty++;
    }
    this.countSumPrice();
  }


  onClickPayment() {
    if (this.mOrderArray.length > 0) {
      this.mIsPaymentShow = true;
    } else {
      alert('please select item');
    }
  }

  countSumPrice() {
    this.mTotalPrice = 0;
    for (const item of this.mOrderArray) {
      this.mTotalPrice += item.price * item.qty;
    }
  }

  isSelectedItem(item: Product) {
    return this.mOrderArray.indexOf(item) === -1 ? false : true;
  }

  onClickRemoveOrder(item: Product) {
    this.mProductArray.map(data => {
      if (item.productId === data.productId) {
        data.qty = null;
      }
    });

    this.mOrderArray.splice(this.mOrderArray.indexOf(item), 1);
    this.countSumPrice();
  }

  onPaymentCompleted() {
    this.mProductArray = [];
    this.mOrderArray = [];
    this.mTotalPrice = 0;
    this.mIsPaymentShow = false;

    this.feedData();
  }

}
