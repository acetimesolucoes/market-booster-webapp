import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient,) { }

  getOrdersBySellerId(id: string, path_params: string[]): Observable<any[]> {
    let path = `/orders/search?seller=${id}`;
    // let ml_base_url = 'https://api.mercadolibre.com';
    let ml_base_url = 'http://localhost:4200/api';

    path_params.forEach(param => {
      path += `&${param}`;
    });

    return this.http.get<any[]>(`${ml_base_url}${path}`);
  }

  getOrderShipments(orderId: string) {
    let path = `/orders/${orderId}/shipments`;
    // let ml_base_url = 'https://api.mercadolibre.com';
    let ml_base_url = 'http://localhost:4200/api';

    return this.http.get<any[]>(`${ml_base_url}${path}`);
  }
}
