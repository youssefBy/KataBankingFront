import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Account} from "../model/account";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl: string = "http://localhost:8080/api";
  constructor(private http: HttpClient) { }


  getAccounts(): Observable<any>{
    return this.http.get(this.baseUrl + "/v0/accounts");
  }
}
