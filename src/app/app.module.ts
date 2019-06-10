import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/authen/login/login.component';
import { RegisterComponent } from './components/authen/register/register.component';
import { ReportComponent } from './components/report/report.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FotterComponent } from './components/shared/fotter/fotter.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { ShopHomeComponent } from './components/shop/shop-home/shop-home.component';
import { ShopPaymentComponent } from './components/shop/shop-payment/shop-payment.component';
import { StockCreateComponent } from './components/stock/stock-create/stock-create.component';
import { StockEditComponent } from './components/stock/stock-edit/stock-edit.component';
import { StockHomeComponent } from './components/stock/stock-home/stock-home.component';
import { TransactionDetailComponent } from './components/transaction/transaction-detail/transaction-detail.component';
import { TransactionHomeComponent } from './components/transaction/transaction-home/transaction-home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ReportComponent,
    HeaderComponent,
    FotterComponent,
    MenuComponent,
    ShopHomeComponent,
    ShopPaymentComponent,
    StockCreateComponent,
    StockEditComponent,
    StockHomeComponent,
    TransactionDetailComponent,
    TransactionHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
