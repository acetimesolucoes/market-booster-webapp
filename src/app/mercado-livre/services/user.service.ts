import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getMe() {
    return this.http.get(``);
  }

  getUserInfoById(userId: string): Observable<any> {
    let path = `/users/${userId}`;
    let ml_base_url = 'http://localhost:4200/api';

    return this.http.get<any>(`${ml_base_url}${path}`);
  }

}
