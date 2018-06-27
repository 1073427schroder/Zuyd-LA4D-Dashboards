import { Component, OnInit } from '@angular/core';

import { LearningActivity } from '../learning-activity';
import { DataService } from '../data.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-new-learning-activity-form',
  templateUrl: './new-learning-activity-form.component.html'
})
export class NewLearningActivityFormComponent implements OnInit {
  
  @Input() module;

  typesObject = {
    'Hoorcollege': 'hc',
    'Werkcollege': 'wc',
    'Weekopdrachten': 'wo',
    'Zelfstudie': 'zc'
  };

  types = [
    "Hoorcollege",
    "Werkcollege",
    "Weekopdrachten",
    "Zelfstudie"
  ];

  model = new LearningActivity(0, "", "", "", "", 1, 1);

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
    console.log(this.module);
    if (this.model && this.module) {
      this.dataService.newLearningActivity(this.model, this.module);
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
