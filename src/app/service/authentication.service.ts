import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post<any>(`${this.baseUrl}/authenticate`, { email, password });
  }

  logout() {
    localStorage.removeItem('token'); // Clear the stored token
  }

  getToken() {
    return localStorage.getItem('token');
  }


}
