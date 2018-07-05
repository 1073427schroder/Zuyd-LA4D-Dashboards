import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-visualisation',
  templateUrl: './student-visualisation.component.html',
  styleUrls: ['./student-visualisation.component.css']
})
export class StudentVisualisationComponent implements OnInit {
  activeList = {
    home: '',
    learningactivities: '',
    visualisation: 'active'
  }
  constructor() { }

  ngOnInit() {
  }

}
