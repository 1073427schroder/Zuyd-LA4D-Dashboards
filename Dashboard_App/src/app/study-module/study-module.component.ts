import { Component, OnInit } from '@angular/core';
import { StudyModule } from './study-module';
import { DataService } from '../data.service';


@Component({
  selector: 'app-study-module',
  templateUrl: './study-module.component.html',
  styleUrls: ['./study-module.component.css']
})
export class StudyModuleComponent implements OnInit {
  sModule: StudyModule;
  sModules: StudyModule[];
  selectList = [];
  

  onSelectM(moduleSelected: StudyModule): void {
    this.sModule = moduleSelected;
  }

  constructor(private dataService: DataService) {  }

  ngOnInit() {
    this.getStudyModules();
  }

  getStudyModules(): void {
    this.dataService.getStudyModules().subscribe(modules => {
      this.sModules = modules;
      for (var key in modules) {
        this.selectList.push(modules[key]);
      }
    });
  }
   
}
