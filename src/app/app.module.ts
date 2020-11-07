import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServerListComponent } from './dashboard/server-list/server-list.component';
import { ServerItemComponent } from './dashboard/server-list/server-item/server-item.component';
import { AccountComponent } from './account/account.component';
import { LoggerService } from './logger.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './authentication/login/login.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ServerListComponent,
    ServerItemComponent,
    AccountComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
