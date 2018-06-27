import { Component, OnInit } from '@angular/core';

import { LearningActivity } from '../learning-activity';
import { DataService } from '../data.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-edit-activity-form',
  templateUrl: './edit-activity-form.component.html'
})
export class EditActivityFormComponent implements OnInit {

  @Input() activityId: string;
  @Input() model: LearningActivity;
  @Input() module: string;

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

  //model = new LearningActivity(0, "Hoorcollege 1", "hc", "Beschrijving van het eerste hoorcollege", "Kennis opdoen", 1, 1);

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
    
    if (this.activityId && this.model && this.module) {
      console.log("all there:");
      console.log(this.activityId);
      console.log(this.model);
      console.log(this.module);
      this.dataService.editLearningActivity(this.model, this.activityId, this.module);
    }
    else {
      console.log("Something's missing:");
      console.log(this.activityId);
      console.log(this.model);
      console.log(this.module);
    }
    

    //this.dataService.newLearningActivity(this.model, 'IOT1_01');
  }

  constructor(
    private dataService : DataService
  ) { }

  ngOnInit() {
    if (!this.model) {
      this.model = new LearningActivity(0, "", "", "", "", 1, 1);
    }
  }

}
