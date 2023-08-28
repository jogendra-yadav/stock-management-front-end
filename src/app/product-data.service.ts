import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  private apiUrl = environment.apiHost;; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getProductData(): Observable<any[]> {
    const token = sessionStorage.getItem('apiToken') ?? '';

    const headers = new HttpHeaders().set('x-access-token', token);

    return this.http.get<any[]>(`${this.apiUrl}/product/list/`, { headers });
  }
}