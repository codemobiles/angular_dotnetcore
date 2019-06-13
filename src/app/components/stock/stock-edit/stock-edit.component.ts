import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { log, error } from 'util';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-stock-edit',
  templateUrl: './stock-edit.component.html',
  styleUrls: ['./stock-edit.component.css']
})
export class StockEditComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private restService: RestService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.feedData(params.id);
      }
    );
  }

  feedData(id: number) {
    this.restService.getProduct(id).subscribe(
      data => {
        alert(JSON.stringify(data.result));
      },
      error => {
        alert(error);
      }
    );
  }

}
