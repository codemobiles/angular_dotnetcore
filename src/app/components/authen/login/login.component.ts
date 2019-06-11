import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private restServive: RestService, private router: Router) { }

  ngOnInit() {
  }

  onClickSubmit(form) {
    this.restServive.login(form.value).subscribe(
      data => {
        if (data.token !== '') {
          localStorage.setItem(
            environment.keyLocalAuthenInfo, // key
            JSON.stringify(data.token) // value
          );
          this.router.navigate(['stock']);
        } else {
          alert('token invalid');
        }
      },
      error => {
        alert(JSON.stringify(error));
      }
    );
  }

}
