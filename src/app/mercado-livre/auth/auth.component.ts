import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  authenticated: any;

  constructor(
    private aRoute: ActivatedRoute,
    private service: AuthService,
    private router: Router,
  ) {
    this.aRoute.queryParams.subscribe((p: any) => {
      if (p.code) {
        this.getToken(p.code);
      }
    });

    this.verifyAuthentication();
  }

  async doLoginMeli() {

    const meli_base_url = 'https://auth.mercadolivre.com.br';
    const app_id = '5071988398712992';
    const redirect_uri = 'http://localhost:4200/meli/auth';

    window.location.href = `${meli_base_url}/authorization?response_type=code&client_id=${app_id}&redirect_uri=${redirect_uri}`;
  }

  async getToken(code: string) {
    console.log('code => ', code);

    localStorage.setItem('ml-code', code);

    this.service.getToken(code).subscribe(a => {
      console.log('a => ', a);

      localStorage.setItem('ml-token', JSON.stringify(a));

      // console.log(localStorage.getItem('ml-token'));

      this.router.navigate(['meli/orders']);
    });
  }

  verifyAuthentication() {
    // console.log(localStorage.getItem('ml-token'));

    this.authenticated = localStorage.getItem('ml-token');
    if (this.authenticated) {
      return true;
    }

    return false;
  }
}
