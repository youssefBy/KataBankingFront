import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../service/authentication.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) {
  }

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  //email = 'youssef.banking@gmail.com';
  //password = 'admin';

  loginFailed: boolean =false;

  ngOnInit(): void {

  }


  onSubmit() {

    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(res => {
        const token = res.token;
        localStorage.setItem('token', token);
        this.router.navigateByUrl('/home');
      },
      error => {
        this.loginFailed = true;
        this.loginForm.reset();
        console.log(error);
      }
    )
  }


}
