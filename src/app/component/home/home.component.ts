import {Component, OnInit} from '@angular/core';
import {AccountService} from "../../service/account.service";
import {Account} from "../../model/account";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  accounts: Account[];
  cols: any[];

  constructor(private accountService: AccountService, private router: Router) {
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
      { field: 'transactionsButtons', header: 'Operations' },
      { field: 'plus', header: '' }
    ];
  }

  navigateToDeposit(accountNumber:string) {
    this.router.navigate(['/operation', 'deposit',accountNumber]);
  }

  navigateToWithdrawal(accountNumber:string) {
    this.router.navigate(['/operation', 'withdrawal',accountNumber]);
  }

}
