import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { forEach } from '@firebase/util/dist/src/obj';

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

  activityList = [];

  activityList123 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    if (!this.selectedId) this.selectedId = "None";

    this.getLearningActivities();

  }

  getLearningActivities(): void {
    this.dataService.getLearningActivities().subscribe(activities => {
      console.log(activities["AP1_01"]);
      this.activityList = activities["AP1_01"];

      let i = 0;
      for (i; i < this.activityList.length; i++) {
        this.activityList[i]["icon"] = this.iconList[this.activityList[i]["type"]];
        console.log(this.activityList[i]["icon"]);
      }

    });
  }


}
