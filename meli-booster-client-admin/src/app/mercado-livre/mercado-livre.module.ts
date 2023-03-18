import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MercadoLivreRoutingModule } from './mercado-livre-routing.module';
import { MercadoLivreComponent } from './mercado-livre.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    MercadoLivreComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MercadoLivreRoutingModule,
  ]
})
export class MercadoLivreModule { }
