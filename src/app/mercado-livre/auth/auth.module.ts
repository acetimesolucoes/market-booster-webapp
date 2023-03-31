import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from '../services/auth.service';


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    AuthRoutingModule,
    HttpClientModule,
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
