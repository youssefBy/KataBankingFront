import {Component, OnInit} from '@angular/core';
import {AccountService} from "../../service/account.service";
import {Account} from "../../model/account";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  accounts: Account[];
  cols: any[];

  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe(res => {
      this.accounts = res;
    }, error => {
      console.log(error);
    })

    this.cols = [
      { field: 'accountNumber', header: 'Account number' },
      { field: 'balance', header: 'Balance' },
      { field: 'transactionsHistory', header: 'History' },
      { field: 'transactionsButtons', header: 'Operations' }
    ];
  }

}
