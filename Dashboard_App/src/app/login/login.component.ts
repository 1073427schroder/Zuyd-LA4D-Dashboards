import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string = '';

  user = {
    "email" : "",
    "password" : ""
  }
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  tryLogin() {
    this.authService.doLogin(this.user)
      .then(res => {
        this.router.navigate(['/teacher']);
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
      })
  }

}
