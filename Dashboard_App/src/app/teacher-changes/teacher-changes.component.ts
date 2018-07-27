import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-changes',
  templateUrl: './teacher-changes.component.html',
  styleUrls: ['./teacher-changes.component.css']
})
export class TeacherChangesComponent implements OnInit {

  answeredFirst = false;

  changes = {
    willChange: false,
    whyNot: "",
    what: "",
    when: ""
  }

  //Differences between bad and neutral removed, could refactor later into one
  selectedClasses = {
    bad: "btn btn-primary btnWidth",
    neutral: "btn btn-primary btnWidth",
    good: "btn btn-primary btnWidth"
  }

  notSelectedClasses = {
    bad: "btn btn-outline-primary btnWidth",
    neutral: "btn btn-outline-primary btnWidth",
    good: "btn btn-outline-primary btnWidth"
  }

  btnClassWillChange = {
    bad: this.notSelectedClasses.bad,
    good: this.notSelectedClasses.good
  }

  constructor() { }

  ngOnInit() {
  }

  resetOtherValues(change: boolean) {
    if (change) {
      this.changes.whyNot = "";
    }
    else {
      this.changes.what = "";
      this.changes.when = "";
    }
  }

  willChange(change: boolean) {
    if (change) {
      this.btnClassWillChange.good = this.selectedClasses.good;
      this.btnClassWillChange.bad = this.notSelectedClasses.bad;
    }
    else {
      this.btnClassWillChange.good = this.notSelectedClasses.good;
      this.btnClassWillChange.bad = this.selectedClasses.bad;
    }
    this.changes.willChange = change;
    this.answeredFirst = true;
    this.resetOtherValues(change);
  }

  saveChanges() {

    // Deal with different date formats
    //this.changes.when = Date.parse(this.changes.when).toString();

    console.log(this.changes);
  }

}
