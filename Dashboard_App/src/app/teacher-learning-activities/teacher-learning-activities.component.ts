import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-learning-activities',
  templateUrl: './teacher-learning-activities.component.html',
  styleUrls: ['./teacher-learning-activities.component.css']
})
export class TeacherLearningActivitiesComponent implements OnInit {
  activeList = {
    home: '',
    learningactivities: 'active',
    visualisation: ''
  };
  module = "";

  constructor() { }

  ngOnInit() {
  }

}
