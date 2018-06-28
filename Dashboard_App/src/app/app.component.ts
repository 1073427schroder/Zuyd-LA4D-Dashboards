import { Component } from '@angular/core';
import { UserService } from './auth/user.service';
import { AuthService } from './auth/auth.service';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  teacherScreen = false;
  studentScreen = false;
  feedbackScreen = false;
  loginScreen = false;
  registerScreen = false;

  title = 'LA Dashboards';

  activityId = "LG-9YjTMlQNeDaS-qOa";
  module = "IOT1_01";

  selectedId: string = null;

  constructor(
    private s: UserService,
    private a: AuthService,
    private d: DataService
  ) { }

  noScreen() {
    this.teacherScreen = false;
    this.studentScreen = false;
    this.feedbackScreen = false;
    this.loginScreen = false;
    this.registerScreen = false;
  }

  getCurrentUserTest() {
    this.s.getCurrentUser();
  }

  logoutTest() {
    this.a.doLogout();
  }

  getObjectTest() {    
    this.d.getObjectTest().subscribe(obj => {
      console.log(obj);
      for (let prop in obj) {
        console.log(prop);
        console.log(obj[prop]['id']);
        obj[prop]['id'] = prop;
        this.d.editLearningActivity(obj[prop], prop, "IOT1_01");
      }
      console.log(obj);
    });
    
  }


}
