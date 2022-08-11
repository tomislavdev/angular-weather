import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  get(endpoint: string, params = {}): Observable<any> {
    return this.http.get(endpoint, { params });
  }

  post(endpoint: string, body: object = {}, options?: { headers?: HttpHeaders }): Observable<any> {
      return this.http.post(endpoint, body, options);
  }
}
