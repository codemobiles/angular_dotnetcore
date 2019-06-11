import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private restServive: RestService) { }

  ngOnInit() {
  }

  onClickSubmit(form) {
    this.restServive.login(form.value).subscribe(
      data => {
          alert(JSON.stringify(data.token));
      },
      error => {
        alert(JSON.stringify(error));
      }
    );
  }

}
