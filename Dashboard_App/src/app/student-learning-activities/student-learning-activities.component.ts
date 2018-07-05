import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-learning-activities',
  templateUrl: './student-learning-activities.component.html',
  styleUrls: ['./student-learning-activities.component.css']
})
export class StudentLearningActivitiesComponent implements OnInit {
  activeList = {
    home: '',
    learningactivities: 'active',
    visualisation: ''
  };
  constructor() { }

  ngOnInit() {
  }

}
