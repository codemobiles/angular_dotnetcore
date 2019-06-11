import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User, ResponseLogin, ResponseRegister } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private hostURL = environment.baseAPIURL;
  private apiURL = `${this.hostURL}/api/v2`;
  // -----------------------------------------------------
  private loginURL = `${this.apiURL}/auth/login`;
  private registerURL = `${this.apiURL}/auth/register`;
  private productURL = `${this.apiURL}/product`;
  private outOfStockURL = `${this.productURL}/count/out_of_stock`;
  private transactionURL = `${this.apiURL}/transaction`;


  // DI
  constructor(private http: HttpClient, ) { }


  login(user: User): Observable<ResponseLogin> {
    return this.http.post<ResponseLogin>(this.loginURL, user, { headers: this.headers });
  }

  register(user: User): Observable<ResponseRegister> {
    return this.http.post<ResponseRegister>(this.registerURL, user, { headers: this.headers });
  }

  isLogin(): boolean {
    const authenInfo = JSON.parse(localStorage.getItem(environment.keyLocalAuthenInfo));
    return authenInfo !== null;
  }
  
  logout() {
    localStorage.removeItem(environment.keyLocalAuthenInfo);
  }



}

