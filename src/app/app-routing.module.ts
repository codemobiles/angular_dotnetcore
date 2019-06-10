import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/authen/login/login.component';
import { RegisterComponent } from './components/authen/register/register.component';
import { StockHomeComponent } from './components/stock/stock-home/stock-home.component';
import { StockCreateComponent } from './components/stock/stock-create/stock-create.component';
import { StockEditComponent } from './components/stock/stock-edit/stock-edit.component';
import { ShopHomeComponent } from './components/shop/shop-home/shop-home.component';
import { TransactionHomeComponent } from './components/transaction/transaction-home/transaction-home.component';
import { TransactionDetailComponent } from './components/transaction/transaction-detail/transaction-detail.component';
import { ReportComponent } from './components/report/report.component';

const routes: Routes = [
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },
  { path: 'stock', component: StockHomeComponent},
  { path: 'stock/create', component: StockCreateComponent},
  { path: 'stock/edit/:id', component: StockEditComponent},
  { path: 'shop', component: ShopHomeComponent},
  { path: 'transaction', component: TransactionHomeComponent },
  { path: 'transaction/detail/:id', component: TransactionDetailComponent },
  { path: 'report', component: ReportComponent },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth/login' }, // for page not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
