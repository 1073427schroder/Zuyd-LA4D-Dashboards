import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router, Params } from '@angular/router';
import { UserResolver } from '../auth/user.resolver';
import { DataService } from '../data.service';

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
    private router: Router,
    private userResolver: UserResolver,
    private dataService: DataService
  ) { }

  ngOnInit() {
  }

  tryLogin() {
    this.authService.doLogin(this.user)
      .then(res => {
        this.dataService.getCurrentRole().then(data => {
          console.log(data);
          this.router.navigate(['/' + data]);
        });
        //this.router.navigate(['/teacher']);
        //this.userResolver.resolve()
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
      })
  }

}
