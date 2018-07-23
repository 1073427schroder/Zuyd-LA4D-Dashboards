import { Component, OnInit, NgModule } from '@angular/core';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';

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

  module = '';

  constructor(
    private dataservice: DataService
  ) { }

  ngOnInit() {
  }

}
