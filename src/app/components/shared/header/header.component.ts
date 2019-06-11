import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private restService: RestService, private router: Router) { }

  ngOnInit() {
  }

  onClickLogout() {
    this.restService.logout();
    this.router.navigate(['auth/login']);
  }

}
