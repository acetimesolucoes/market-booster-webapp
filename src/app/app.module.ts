import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { OrdersComponent } from './mercado-livre/orders/orders.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { DashBoosterComponent } from './layouts/dash-booster/dash-booster.component';
import { NavbarComponent } from './layouts/dash-booster/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    BlankComponent,
    DashBoosterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    CommonModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
