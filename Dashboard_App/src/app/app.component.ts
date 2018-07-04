import { Component, OnInit } from '@angular/core';
import { UserService } from './auth/user.service';
import { AuthService } from './auth/auth.service';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private chartData: Array<any>;

  teacherScreen = false;
  studentScreen = false;
  feedbackScreen = false;
  loginScreen = false;
  registerScreen = false;
  dataVisScreen = false;

  title = 'LA Dashboards';

  activityId = "LG-9YjTMlQNeDaS-qOa";
  module = "IOT1_01";

  selectedId: string = null;

  constructor(
    private s: UserService,
    private a: AuthService,
    private d: DataService
  ) { }

  ngOnInit() {
    // give everything a chance to get loaded before starting the animation to reduce choppiness
    setTimeout(() => {
      this.generateData();

      // change the data periodically
      setInterval(() => this.generateData(), 3000);
    }, 1000);
  }
  
  noScreen() {
    this.teacherScreen = false;
    this.studentScreen = false;
    this.feedbackScreen = false;
    this.loginScreen = false;
    this.registerScreen = false;
    this.dataVisScreen = false;
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

  generateData() {
    this.chartData = [];
    for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
      this.chartData.push([
        `Index ${i}`,
        Math.floor(Math.random() * 100)
      ]);
    }
  }

}
