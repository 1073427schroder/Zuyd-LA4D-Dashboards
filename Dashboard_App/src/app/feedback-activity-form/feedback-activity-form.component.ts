import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { UserService } from '../auth/user.service';
import { Action } from 'rxjs/scheduler/Action';

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
    motivationScore: "",
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
    motLow: "",
    motNeutral: "",
    motHigh: ""
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
    private userService: UserService
  ) { }

  ngOnInit() {
    this.deselectButtons('m');
    this.deselectButtons('t');
    this.deselectButtons('mot');

    this.userService.getCurrentUser().then(user => {
      this.feedback.uid = user['uid'];
    });

    this.feedback.activityId = this.activityId;
    

      
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

  setMotivationScore(score: string) {
    this.feedback.motivationScore = score;

    this.deselectButtons('mot');
    this.selectButton('mot', score);

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
      case "mot":
        this.btnClasses.motLow = this.notSelectedClasses.bad;
        this.btnClasses.motNeutral = this.notSelectedClasses.neutral;
        this.btnClasses.motHigh = this.notSelectedClasses.good;
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
    else if (cat == 'mot') {
      switch (score) {
        case "bad":
          this.btnClasses.motLow = this.selectedClasses.bad;
          break;
        case "neutral":
          this.btnClasses.motNeutral = this.selectedClasses.neutral;
          break;
        case "good":
          this.btnClasses.motHigh = this.selectedClasses.good;
          break;
        default:
          break;
      }
    }
  }

  checkForm() {
    if (this.feedback.materialScore && this.feedback.teacherScore && this.feedback.motivationScore
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
  }

}
