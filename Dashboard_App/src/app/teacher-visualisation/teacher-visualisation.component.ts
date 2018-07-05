import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-visualisation',
  templateUrl: './teacher-visualisation.component.html',
  styleUrls: ['./teacher-visualisation.component.css']
})
export class TeacherVisualisationComponent implements OnInit {

  activeList = {
    home: '',
    learningactivities: '',
    visualisation: 'active'
  }

  constructor() { }

  ngOnInit() {
  }

}
