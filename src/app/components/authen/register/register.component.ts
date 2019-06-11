import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  position = ['Cashier', 'Admin'];

  constructor(private restService: RestService,  private location: Location) { }

  ngOnInit() {
  }

  onClickSubmit(form) {
    this.restService.register(form.value).subscribe(
      data => {
        this.location.back();
      },
      error => {
        alert(JSON.stringify(error));
      }
    );
  }

}
