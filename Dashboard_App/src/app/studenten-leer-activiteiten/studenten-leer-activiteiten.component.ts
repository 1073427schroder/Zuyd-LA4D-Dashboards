import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FeedbackResolver } from '../feedback-resolver.service';

@Component({
  selector: 'app-studenten-leer-activiteiten',
  templateUrl: './studenten-leer-activiteiten.component.html',
  styleUrls: ['./studenten-leer-activiteiten.component.css']
})
export class StudentenLeerActiviteitenComponent implements OnInit {

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
  
  module = "IOT1_01";  
  activityList = [];

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
    private feedbackResolver: FeedbackResolver
  ) { }

  ngOnInit() {
    if (!this.selectedId) this.selectedId = this.module;

    this.getLearningActivities();

    console.log("Test resolver");
    console.log(this.route.snapshot.data);
  }

  getLearningActivities(): void {
    this.dataService.getActivities(this.module).subscribe(activities => {
      this.activityList = activities;
      let i = 0;
      for (i; i < this.activityList.length; i++) {
        this.activityList[i]["icon"] = this.iconList[this.activityList[i]["type"]];
      }
    });
  }

  feedbackActivity(id: string) {
    this.feedbackResolver.setId(id);
    this.router.navigate(['/student/feedback']);
    //this.feedbackResolver.resolve("ander bericht: " + id);
  }

}
