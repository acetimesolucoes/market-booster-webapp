import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlankComponent } from './layouts/blank/blank.component';
import { DashBoosterComponent } from './layouts/dash-booster/dash-booster.component';
import { NavbarComponent } from './layouts/dash-booster/components/navbar/navbar.component';
import { OrdersComponent } from './mercado-livre/orders/orders.component';
import { PublicationsComponent } from './mercado-livre/publications/publications.component';

@NgModule({
  declarations: [
    AppComponent,
    BlankComponent,
    DashBoosterComponent,
    NavbarComponent,
    OrdersComponent,
    PublicationsComponent,
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
