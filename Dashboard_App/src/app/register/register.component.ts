import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth/auth.service";
import { DataService } from "../data.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errorMessage: string = '';
  successMessage: string = '';

  user = {
    "name": ""
    , "email": ""
    , "role": ""
    , "password": ""
  }

  constructor(
    private authService: AuthService,
    private dataService: DataService
  ) { }

  ngOnInit() {
  }
  
  tryRegister() {
    this.authService.doRegister(this.user)
      .then(res => {
        this.errorMessage = "";
        this.successMessage = "Your account has been created";
        this.dataService.writeUserData(res.uid, this.user.name, this.user.email, this.user.role);
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = "";
      })
  }

}
