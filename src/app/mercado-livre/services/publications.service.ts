import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {

  constructor(private http: HttpClient) { }

  getPublicationsBySellerId(sellerId: string): Observable<any[]> {
    let path = `/users/${sellerId}/items/search?include_filters=true&status=active`;
    // let ml_base_url = 'https://api.mercadolibre.com';
    let ml_base_url = 'http://localhost:4200/api';
    let access_token = JSON.parse(localStorage.getItem('ml-token') || '').access_token;

    return this.http.get<any[]>(`${ml_base_url}${path}`, { headers: { 'Authorization': `Bearer ${access_token}` } });
  }

  getItemsByListIds(ids: string[]): Observable<any> {
    let path = `/items?ids=`;

    ids.forEach((id, i) => {
      path += `${id}`;

      (i < ids.length - 1) ? path += ',' : '';
    });

    // let ml_base_url = 'https://api.mercadolibre.com';
    let ml_base_url = 'http://localhost:4200/api';
    let access_token = JSON.parse(localStorage.getItem('ml-token') || '').access_token;

    return this.http.get<any>(`${ml_base_url}${path}`, { headers: { 'Authorization': `Bearer ${access_token}` } });
  }
}
