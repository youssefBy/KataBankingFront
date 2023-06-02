import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Account} from "../model/account";
import {Observable} from "rxjs";
import {AuthenticationService} from "./authentication.service";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl: string = "http://localhost:8080/api";
  constructor(private http: HttpClient, private authService: AuthenticationService) { }


  getAccounts(): Observable<any>{
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    console.log(headers);
    return this.http.get(this.baseUrl + "/v1/accounts", { headers });
  }
}
