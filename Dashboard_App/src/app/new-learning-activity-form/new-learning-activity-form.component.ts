import { Component, OnInit } from '@angular/core';

import { LearningActivity } from '../learning-activity';
import { DataService } from '../data.service';
import { Input } from '@angular/core';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap/accordion/accordion';

@Component({
  selector: 'app-new-learning-activity-form',
  templateUrl: './new-learning-activity-form.component.html'
})
export class NewLearningActivityFormComponent implements OnInit {
  
  @Input() module: string;
  @Input() acc: NgbAccordion;

  typesObject = {
    'Hoorcollege': 'hc',
    'Werkcollege': 'wc',
    'Weekopdrachten': 'wo',
    'Casus': 'cs',
    'Zelfstudie': 'zc'
  };

  types = [
    "Hoorcollege",
    "Werkcollege",
    "Weekopdrachten",
    "Casus",
    "Zelfstudie"
  ];

  model = new LearningActivity(0, "", "", "", "", null, null);

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
    console.log(this.module);
    if (this.model && this.module) {
      this.dataService.newLearningActivity(this.model, this.module);
      if (this.acc) {
        this.acc.activeIds = [];
      }
    }
    else {
      alert("There is something wrong with the model / module");
    }
  }

  constructor(
    private dataService : DataService
  ) { }

  ngOnInit() {
  }

}
