import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { UserService } from '../auth/user.service';
import { Action } from 'rxjs/scheduler/Action';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feedback-activity-form',
  templateUrl: './feedback-activity-form.component.html',
  styleUrls: ['./feedback-activity-form.component.css']
})
export class FeedbackActivityFormComponent implements OnInit {

  

  module = "IOT1_01"

  activity = {
    title: "Hoorcollege 1"
  }

  activityId = "TempID";

  feedback = {
    activityId: "",
    materialScore: "",
    teacherScore: "",
    comprehensionScore: "",
    commentTitle: "",
    commentBody: "",
    uid: "",
    id: ""
  }

  btnClasses = {
    mBad: "",
    mNeutral: "",
    mGood: "",
    tBad: "",
    tNeutral: "",
    tGood: "",
    compBad: "",
    compGood: ""
  }

  selectedClasses = {
    bad: "btn btn-danger btnWidth",
    neutral: "btn btn-primary btnWidth",
    good: "btn btn-success btnWidth"
  }

  notSelectedClasses = {
    bad: "btn btn-outline-danger btnWidth",
    neutral: "btn btn-outline-primary btnWidth",
    good: "btn btn-outline-success btnWidth"
  }

  formValid = false;

  constructor(
    private dataService: DataService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.deselectButtons('m');
    this.deselectButtons('t');
    this.deselectButtons('com');

    this.userService.getCurrentUser().then(user => {
      this.feedback.uid = user['uid'];
    });

    this.feedback.activityId = this.activityId;

    this.route.data.subscribe(data => {
      console.log('Route Data');
      if (data['data'] != '') {
        this.feedback.activityId = data['data'];
        console.log(this.feedback.activityId);
      }
      else {
        console.log('No id');
        this.router.navigate(['/']);
      }

    });
    

      
  }

  setMaterialScore(score: string) {
    this.feedback.materialScore = score;

    this.deselectButtons('m');
    this.selectButton('m', score);
    this.checkForm();
  }

  setTeacherScore(score: string) {
    this.feedback.teacherScore = score;

    this.deselectButtons('t');
    this.selectButton('t', score);

    this.checkForm();
  }

  setComprehensionScore(score: string) {
    this.feedback.comprehensionScore = score;

    this.deselectButtons('com');
    this.selectButton('com', score);

    this.checkForm();
  }


  deselectButtons(cat: string) {
    switch (cat) {
      case "m":
        this.btnClasses.mBad = this.notSelectedClasses.bad;
        this.btnClasses.mNeutral = this.notSelectedClasses.neutral;
        this.btnClasses.mGood = this.notSelectedClasses.good;
        break;
      case "t":
        this.btnClasses.tBad = this.notSelectedClasses.bad;
        this.btnClasses.tNeutral = this.notSelectedClasses.neutral;
        this.btnClasses.tGood = this.notSelectedClasses.good;
        break;
      case "com":
        this.btnClasses.compBad = this.notSelectedClasses.bad;
        this.btnClasses.compGood = this.notSelectedClasses.good;
        break;
      default:
        break;
    }
  }

  selectButton(cat: string, score: string) {
    if (cat == 'm') {
      switch (score) {
        case "bad":
          this.btnClasses.mBad = this.selectedClasses.bad;
          break;
        case "neutral":
          this.btnClasses.mNeutral = this.selectedClasses.neutral;
          break;
        case "good":
          this.btnClasses.mGood = this.selectedClasses.good;
          break;
        default:
          break;
      }
    }
    else if (cat == 't') {
      switch (score) {
        case "bad":
          this.btnClasses.tBad = this.selectedClasses.bad;
          break;
        case "neutral":
          this.btnClasses.tNeutral = this.selectedClasses.neutral;
          break;
        case "good":
          this.btnClasses.tGood = this.selectedClasses.good;
          break;
        default:
          break;
      }
    }
    else if (cat == 'com') {
      switch (score) {
        case "bad":
          this.btnClasses.compBad = this.selectedClasses.bad;
          break;
        case "good":
          this.btnClasses.compGood = this.selectedClasses.good;
          break;
        default:
          break;
      }
    }
  }

  checkForm() {
    if (this.feedback.materialScore && this.feedback.teacherScore && this.feedback.comprehensionScore
        && this.feedback.uid) {
      this.formValid = true;
    }
    else {
      this.formValid = false;
    }
  }

  
  saveFeedback() {
    console.log(this.feedback);
    this.dataService.saveFeedback(this.module, this.feedback.activityId, this.feedback);
    this.router.navigate(['/student/learningactivities']);
  }
  

}
