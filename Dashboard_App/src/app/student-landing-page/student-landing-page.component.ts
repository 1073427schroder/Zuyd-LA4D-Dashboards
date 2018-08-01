import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-student-landing-page',
  templateUrl: './student-landing-page.component.html',
  styleUrls: ['./student-landing-page.component.css']
})
export class StudentLandingPageComponent implements OnInit {
  activeList = {
    home: 'active',
    learningactivities: '',
    visualisation: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
