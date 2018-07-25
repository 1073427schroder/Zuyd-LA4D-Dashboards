import { Component, OnInit, Input, NgModule, Output, EventEmitter, OnChanges } from '@angular/core';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router/';
@Component({
  selector: 'app-select-learning-activities',
  templateUrl: './select-learning-activities.component.html',
  styleUrls: ['./select-learning-activities.component.css']
})
export class SelectLearningActivitiesComponent implements OnInit, OnChanges {

  @Input() module = '';
  @Output() sendId: EventEmitter<string> = new EventEmitter();

  activityList = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getLearningActivities();
  }

  ngOnChanges() {
    this.getLearningActivities();
  }

  getLearningActivities(): void {
    this.dataService.getActivities(this.module).subscribe(activities => {
      this.activityList = [];
      for (let item in activities) {
        this.activityList.push({ "title": activities[item].title, "id": activities[item].id });
      }
      //this.activityList = activities;
    });
  }

  onSelectActivity(id: string) {
    //console.log("Activity selected, id: ", id);
    this.sendId.emit(id);
  }

}
