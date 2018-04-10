import { Component, OnInit } from '@angular/core';
import { StudyModule } from './study-module';
import { MODULES } from './mock-study-modules';


@Component({
  selector: 'app-study-module',
  templateUrl: './study-module.component.html',
  styleUrls: ['./study-module.component.css']
})
export class StudyModuleComponent implements OnInit {
  sModule: StudyModule;
  sModules: StudyModule[] = MODULES;

  onSelectM(moduleSelected: StudyModule): void {
    this.sModule = moduleSelected;
  }

  constructor() { }

  ngOnInit() {
  }

}
