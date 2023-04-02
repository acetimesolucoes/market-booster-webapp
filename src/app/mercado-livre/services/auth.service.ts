import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { catchError, Observable, pipe, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getToken(code: string): Observable<any> {

    let body = {
      grant_type: 'authorization_code',
      client_id: '5071988398712992',
      client_secret: '6NrvqJa90SV8bBw2BCXiOmfxlDBqp175',
      code,
      redirect_uri: 'http://localhost:4200/meli/auth',
      // code_verifier: '$CODE_VERIFIER'
    };

    let headers = {
      'accept': 'application/json',
      'content-type': 'application/x-www-form-urlencoded',
    };

    let url = 'https://api.mercadolibre.com/oauth/token';

    return this.http.post<any>(url, body, { headers }).pipe(catchError(this.handleError(body)));
  }

  refreshToken() {

  }

  handleError(body: any) {
    return body;
  }
}
