import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './authentication/login/login.component';
import { DASHBOARD_CHILD_ROUTES } from './dashboard/dashboard-subroutes';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'dashboard/:mess', component: DashboardComponent},
  { path: 'account', component: AccountComponent },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
