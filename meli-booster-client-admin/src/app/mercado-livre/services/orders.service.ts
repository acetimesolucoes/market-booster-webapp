import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient,) { }

  getOrdersBySellerId(id: string): Observable<any[]> {
    let path = `/orders/search?seller=${id}`;
    let ml_base_url = 'https://api.mercadolibre.com';
    let access_token = JSON.parse(localStorage.getItem('ml-token') || '').access_token;

    return this.http.get<any[]>(`${ml_base_url}${path}`, { headers: { 'Authorization': `Bearer ${access_token}` }});
  }
}
