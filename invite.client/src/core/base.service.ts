
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  readonly baseUrl = 'https://localhost:8002';
  readonly headers: HttpHeaders = new HttpHeaders({
    'accept': '*/*'
  });

  constructor(private http: HttpClient) { }

  protected get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}${endpoint}`, { headers: this.headers });
  }
}
