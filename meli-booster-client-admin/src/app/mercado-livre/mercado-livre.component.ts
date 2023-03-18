import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mercado-livre',
  templateUrl: './mercado-livre.component.html',
  styleUrls: ['./mercado-livre.component.scss'],
})
export class MercadoLivreComponent {
  constructor(private router: Router) {
    this.verifyAuthentication();
  }

  verifyAuthentication() {
    try {
      let mlDataLogged = JSON.parse(localStorage.getItem('ml-token') || '');
    } catch (error) {
      this.router.navigate(['meli/auth']);
    }
  }
}
