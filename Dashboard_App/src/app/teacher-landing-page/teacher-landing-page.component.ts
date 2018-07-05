import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-landing-page',
  templateUrl: './teacher-landing-page.component.html',
  styleUrls: ['./teacher-landing-page.component.css']
})
export class TeacherLandingPageComponent implements OnInit {

  activeList = {
    home: 'active',
    learningactivities: '',
    visualisation: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
