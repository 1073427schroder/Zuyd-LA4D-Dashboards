import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  

  @Input() selectedId: string;
  @Output() sendId: EventEmitter<string> = new EventEmitter();

  onSelectM(moduleSelected: StudyModule): void {
    this.sModule = moduleSelected;
    this.selectedId = moduleSelected.id;
    this.sendSelectedId();
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

  sendSelectedId(): void {
    this.sendId.emit(this.selectedId);
  }
}
