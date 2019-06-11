import { Component, OnInit } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  position = ['Cashier', 'Admin'];

  constructor() { }

  ngOnInit() {
  }

  onClickSubmit(form) {
    log(JSON.stringify(form.value));
  }

}
