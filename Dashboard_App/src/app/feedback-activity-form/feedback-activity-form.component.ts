import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback-activity-form',
  templateUrl: './feedback-activity-form.component.html',
  styleUrls: ['./feedback-activity-form.component.css']
})
export class FeedbackActivityFormComponent implements OnInit {

  module = "B2A4"

  activity = {
    title: "Hoorcollege 1"
  }

  constructor() { }

  ngOnInit() {
  }

}
