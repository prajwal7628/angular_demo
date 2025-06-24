import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private _apiUrl = "https://01.fy25ey01.64mb.io/";
  private _http = inject(HttpClient);

  constructor() { }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return headers;
  }

  // GET request
  get<T>(): Observable<T> {
    return this._http.get<T>(`${this._apiUrl}`, { headers: this.getHeaders() });
  }

  // POST request
  post<T>(url: string, body: any): Observable<T> {
    return this._http.post<T>(`${this._apiUrl}${url}`, body, { headers: this.getHeaders() });
  }

  // PUT request
  put<T>(url: string, body: any): Observable<T> {
    return this._http.put<T>(`${this._apiUrl}${url}`, body, { headers: this.getHeaders() });
  }

  // PATCH request
  patch<T>(url: string, body: any): Observable<T> {
    return this._http.patch<T>(`${this._apiUrl}${url}`, body, { headers: this.getHeaders() });
  }

  // DELETE request
  delete<T>(url: string): Observable<T> {
    return this._http.delete<T>(`${this._apiUrl}${url}`, { headers: this.getHeaders() });
  }

}
