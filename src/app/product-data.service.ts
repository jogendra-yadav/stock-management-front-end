import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl, environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  constructor(private http: HttpClient) {}

  getProductData(): Observable<any[]> {
    const token = sessionStorage.getItem('apiToken') ?? '';

    const headers = new HttpHeaders().set('x-access-token', token);

    return this.http.get<any[]>(`${baseUrl}/product/list/`, { headers });
  }
}