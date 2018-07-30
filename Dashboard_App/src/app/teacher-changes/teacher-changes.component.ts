import { Component, OnInit } from '@angular/core';
import { ChangesServiceService } from '../changes-service.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

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
    when: "",
    tId: ""
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

  constructor(
    private changesService: ChangesServiceService,
    private dataService: DataService,
    private router: Router,
    private location: Location
  ) { }

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


    this.changes.tId = this.dataService.getCurrentId();

    this.dataService.saveTeacherChanges(this.changesService.module, this.changesService.laId, this.changes);
    this.location.back();
  }

}
