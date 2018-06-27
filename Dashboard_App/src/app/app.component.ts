import { Component } from '@angular/core';
import { UserService } from './auth/user.service';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LA Dashboards';

  activityId = "LG-9YjTMlQNeDaS-qOa";
  module = "IOT1_01";

  selectedId: string = null;

  constructor(
    private s: UserService,
    private a: AuthService
  ) { }

  getCurrentUserTest() {
    this.s.getCurrentUser();
  }

  logoutTest() {
    this.a.doLogout();
  }


}
