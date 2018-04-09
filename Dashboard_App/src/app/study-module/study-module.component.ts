import { Component, OnInit } from '@angular/core';
import { StudyModule } from './study-module';
import { MODULES } from './mock-study-modules';
import { Test } from './test';
import { TESTS } from './mock-test';


@Component({
  selector: 'app-study-module',
  templateUrl: './study-module.component.html',
  styleUrls: ['./study-module.component.css']
})
export class StudyModuleComponent implements OnInit {

  test: Test = {
    id: 0
  };

  tests: Test[] = TESTS;

  selectedTest = this.test;
  onSelect(n: number): void {
    console.log("ID: " + JSON.stringify(n));
    this.selectedTest = n;
  }


  /*
  onSelect(n: number): void {
    this.test = this.tests[n];
  }
  */

  //sModule: StudyModule = {
  //  id: 0,
  //  name: 'NameModule1',
  //  description: 'DescriptionModule1',
  //  goal: 'GoalModule1',
  //  learningOutcome: 'LearningOutcomeModule1',
  //  semester: 1,
  //  schoolyear: '2017/2018'
  //};

  sModule: StudyModule;

  sModules: StudyModule[] = MODULES;

  onSelectM(moduleSelected: StudyModule): void {
    this.sModule = moduleSelected;
  }

  constructor() { }

  ngOnInit() {
    this.test = this.tests[1];
  }

}
