import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User, ResponseLogin, ResponseRegister } from '../models/user.model';
import { Observable } from 'rxjs';
import { ResponseProducts, ResponseOutOfStock, Product, ResponseProduct } from '../models/product.model';

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

  // -----------------------------------

  getProducts(): Observable<ResponseProducts> {
    //  this.makeJWTManual();
    return this.http.get<ResponseProducts>(this.productURL, { headers: this.headers });
  }

  getOutOfStock(): Observable<ResponseOutOfStock> {
    // this.makeJWTManual();
    return this.http.get<ResponseOutOfStock>(this.outOfStockURL, { headers: this.headers });
  }

  searchProducts(keyword: string): Observable<ResponseProducts> {
    // this.makeJWTManual();

    return this.http.get<ResponseProducts>(
      `${this.productURL}/search/name?keyword=${keyword}`, {
        headers: this.headers
      });
  }

  deleteProduct(id: number): Observable<ResponseProducts> {
    return this.http.delete<ResponseProducts>(
      `${this.productURL}/${id}`, {
        headers: this.headers
      });
  }

  addProduct(product: FormData): Observable<ResponseProducts> {
    return this.http.post<ResponseProducts>(`${this.productURL}`, product);
  }

  getProduct(id: number): Observable<ResponseProduct> {
    return this.http.get<ResponseProduct>(`${this.productURL}/${id}`);
  }

  editProduct(product: FormData, id): Observable<ResponseProducts> {
    return this.http.put<ResponseProducts>(`${this.productURL}/${id}`, product);
  }


  // --------------------------------
  makeJWTManual() {
    this.headers = new HttpHeaders({
      'Authorization': 'bearer ' + JSON.parse(
        localStorage.getItem(environment.keyLocalAuthenInfo)
      )
    });
  }

}

