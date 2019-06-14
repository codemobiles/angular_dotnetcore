import { Component, OnInit, ViewChild } from '@angular/core';
import { TransactionDetailComponent } from '../transaction-detail/transaction-detail.component';
import { Transaction } from 'src/app/models/transaction.model';
import { RestService } from 'src/app/services/rest.service';
declare var $: any;

@Component({
  selector: 'app-transaction-home',
  templateUrl: './transaction-home.component.html',
  styleUrls: ['./transaction-home.component.css']
})
export class TransactionHomeComponent implements OnInit {

  // angular 8 must be declare option
  @ViewChild('transactionDetailModal', {static: true}) transDetail: TransactionDetailComponent;

  mTransactionArray: Transaction[];

  constructor(private restService: RestService) { }

  ngOnInit() {
    this.feedData();
  }

  feedData() {
    this.restService.getTransaction().subscribe(
      data => {
        // console.log(JSON.stringify(data.result));
        this.mTransactionArray = data.result;
      },
      error => {
        console.log(JSON.stringify(error));
      }
    );
  }

  getNumberOfSKU(rawOrder): number {
    const order = JSON.parse(rawOrder);
    return order.length;
  }

  onClickTransactionModal(id) {
     this.transDetail.feedData(id);
     $('#viewTransactionDetailModal').modal('show');
  }
}
