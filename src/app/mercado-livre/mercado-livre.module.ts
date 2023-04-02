import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MercadoLivreRoutingModule } from './mercado-livre-routing.module';
import { MercadoLivreComponent } from './mercado-livre.component';
import { MeliAuthInterceptor } from '../libs/interceptors/meli-auth.interceptor';
import { OrdersComponent } from './orders/orders.component';
import { PublicationsComponent } from './publications/publications.component';
import { ErrorInterceptor } from '../libs/interceptors/error.interceptor';
import { AuthComponent } from './auth/auth.component';


@NgModule({
  declarations: [
    MercadoLivreComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    CommonModule,
    MercadoLivreRoutingModule,
    HttpClientModule,
  ],
  providers: []
})
export class MercadoLivreModule { }
