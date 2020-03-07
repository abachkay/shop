import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(
    private httpClient: HttpClient) { }

  get<T>(endpoint: string): Observable<T> {
    return this.httpClient.get(`${backendUrl}/${endpoint}`)
      .pipe(
        map(result => result as T)
      );
  }

  getById<T>(endpoint: string, id: number): Observable<T> {
    return this.httpClient.get(`${backendUrl}/${endpoint}/${id}`)
      .pipe(
        map(result => result as T)
      );
  }

  post(endpoint: string, body: any) {
    return this.httpClient.post(`${backendUrl}/${endpoint}`, body);
  }

  put(endpoint: string, id: number, body: any) {
    return this.httpClient.put(`${backendUrl}/${endpoint}/${id}`, body);
  }

  delete(endpoint: string, id: number) {
    return this.httpClient.delete(`${backendUrl}/${endpoint}/${id}`);
  }
}

const backendUrl = 'http://localhost:3000';
