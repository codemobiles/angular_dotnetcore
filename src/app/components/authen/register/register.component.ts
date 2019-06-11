import { Component, OnInit } from '@angular/core';
import { log } from 'util';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  position = ['Cashier', 'Admin'];

  constructor(private restService: RestService) { }

  ngOnInit() {
  }

  onClickSubmit(form) {
    this.restService.register(form.value).subscribe(
      data => {
        alert(JSON.stringify(data));
      },
      error => {
        alert(JSON.stringify(error));
      }
    );
  }

}
