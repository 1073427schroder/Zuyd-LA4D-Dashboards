import { Component, OnInit } from '@angular/core';

import { LearningActivity } from '../learning-activity';
import { DataService } from '../data.service';
import { Input } from '@angular/core';

import { LeerActiviteitenComponent } from '../leer-activiteiten/leer-activiteiten.component';

@Component({
  selector: 'app-edit-activity-form',
  templateUrl: './edit-activity-form.component.html'
})
export class EditActivityFormComponent implements OnInit {

  @Input() activityId: string;
  @Input() activity: LearningActivity;
  @Input() module: string;

  bufferActivity: LearningActivity;

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

  //model = new LearningActivity(0, "Hoorcollege 1", "hc", "Beschrijving van het eerste hoorcollege", "Kennis opdoen", 1, 1);

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(this.activity);
    this.activity = JSON.parse(JSON.stringify(this.bufferActivity));
    
    if (this.activityId && this.activity && this.module) {
      console.log("all there:");
      console.log(this.activityId);
      console.log(this.activity);
      console.log(this.module);
      this.dataService.editLearningActivity(this.activity, this.activityId, this.module);
    }
    else {
      console.log("Something's missing:");
      console.log(this.activityId);
      console.log(this.activity);
      console.log(this.module);
    }
    

    //this.dataService.newLearningActivity(this.model, 'IOT1_01');
    this.leercomp.closeAllEdits();
  }

  constructor(
    private dataService: DataService,
    private leercomp: LeerActiviteitenComponent
  ) { }

  ngOnInit() {
    if (!this.activity) {
      this.activity = new LearningActivity(0, "", "", "", "", 1, 1, "");
    }
    this.bufferActivity = JSON.parse(JSON.stringify(this.activity));
  }

}
