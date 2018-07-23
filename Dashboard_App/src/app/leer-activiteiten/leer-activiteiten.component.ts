import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { forEach } from '@firebase/util/dist/src/obj';
import { NewLearningActivityFormComponent } from '../new-learning-activity-form/new-learning-activity-form.component';
import { EditActivityFormComponent } from '../edit-activity-form/edit-activity-form.component';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap/accordion/accordion';

@Component({
  selector: 'app-leer-activiteiten',
  templateUrl: './leer-activiteiten.component.html',
  styleUrls: ['./leer-activiteiten.component.css']
})
export class LeerActiviteitenComponent implements OnInit {

  @Input() selectedId: string;

  leeractiviteiten = [
    "hoorcollege 1",
    "discussiecollege 1",
    "werkcollege 1",
    "Weekopdrachten 1"
  ];

  iconList = {
    "hc": "fas fa-chalkboard-teacher",
    "wc": "fas fa-pencil-alt",
    "wo": "fas fa-laptop",
    "zc": "fas fa-book"
  }

  editList = {};

  module = "IOT1_01";

  currentId = '';

  editMode = false;

  activityList = [];
    
  constructor(private dataService: DataService) { }

  ngOnInit() {
    if (!this.selectedId) this.selectedId = this.module;

    this.getLearningActivities();

    //this.dataService.pushTest("test2");

  }

  log(msg: string) {
    console.log(msg);
  }

  setId(id: string) {
    this.currentId = id;
  }

  edit(acc: NgbAccordion) {
    console.log(acc.activeIds);
    this.editMode = true;
    console.log(this.editMode);
    
  }

  editActivity(id: string) {
    this.editList[id] = true;
  }

  closePanel(acc: NgbAccordion) {
    acc.activeIds = [];
  }

  deleteActivity(id: string): void {
    /*
    if (confirm("Are you sure you want to delete " + id + "?")) {
      console.log("Exterminate!");
      this.dataService.removeLearningActivity(id, this.module);
    }
    else {
      console.log("File not deleted");
    }
    */

    this.dataService.removeLearningActivity(id, this.module);

  }

  getLearningActivities(): void {

    this.dataService.getActivities(this.module).subscribe(activities => {
      console.log(activities);
      this.activityList = activities;
      let i = 0;
      for (i; i < this.activityList.length; i++) {
        this.activityList[i]["icon"] = this.iconList[this.activityList[i]["type"]];
        //Keep track of edits
        this.editList[this.activityList[i]['id']] = false;
        
      }
    });
    /*
    this.dataService.getLearningActivities().subscribe(activities => {
      //console.log(activities["AP1_01"]);
      this.activityList = activities["AP1_01"];

      let i = 0;
      for (i; i < this.activityList.length; i++) {
        this.activityList[i]["icon"] = this.iconList[this.activityList[i]["type"]];
        //console.log(this.activityList[i]["icon"]);
      }

    });
    */
  }


}
