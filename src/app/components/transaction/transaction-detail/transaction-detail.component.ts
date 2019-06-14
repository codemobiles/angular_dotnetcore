import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from 'src/app/models/product.model';
import { Transaction } from 'src/app/models/transaction.model';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnInit {


  baseAPIURL = environment.baseAPIURL;

  mOrderArray: Product[] = [];
  mTransaction = new Transaction();

  constructor(
    private restService: RestService
  ) {}

  feedData(transactionID: string) {
    this.restService.getTransactionById(transactionID).subscribe(
      data => {
        // console.log(JSON.stringify(data.result));
        this.mTransaction = data.result;
        this.mOrderArray = JSON.parse(this.mTransaction.orderList);
      },
      error => {
        console.log(JSON.stringify(error));
      }
    );
  }

  getDatetimeNow() {
    return new Date();
  }

}
