import { Component, OnInit, OnChanges } from '@angular/core';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-student-visualisation',
  templateUrl: './student-visualisation.component.html',
  styleUrls: ['./student-visualisation.component.css']
})
export class StudentVisualisationComponent implements OnInit, OnChanges {
  activeList = {
    home: '',
    learningactivities: '',
    visualisation: 'active'
  }

  module = '';

  laID = '';

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges) {

  }

}
