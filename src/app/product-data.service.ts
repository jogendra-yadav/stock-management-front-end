import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  private apiUrl = 'http://localhost:3000'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getProductData(): Observable<any[]> {
    const token = sessionStorage.getItem('apiToken') ?? '';

    const headers = new HttpHeaders().set('x-access-token', token);

    return this.http.get<any[]>(`${this.apiUrl}/product/list/`, { headers });
  }
}