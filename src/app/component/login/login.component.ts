import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../service/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private authService: AuthenticationService, private router: Router) {}

  email = 'youssef.banking@gmail.com';
  password = 'admin';

  ngOnInit(): void {

    this.authService.login(this.email,this.password).subscribe(res => {
        console.log(res.token)
        const token = res.token;
        localStorage.setItem('token', token);
        this.router.navigateByUrl('/home');
      },
      error => {
      console.log(error);
      }
    )

  }



}
