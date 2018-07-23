import { Component, OnInit, Input, NgModule, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router/';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-select-module',
  templateUrl: './select-module.component.html',
  styleUrls: ['./select-module.component.css']
})
export class SelectModuleComponent implements OnInit {

  @Input() module = '';
  @Output() sendModule: EventEmitter<string> = new EventEmitter();



  moduleList = [];

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.tryRetrievingModuleList();
  }

  tryRetrievingModuleList() {
    try {
      this.getModuleList();
    } catch (e) {
      console.log("Error: User not loaded yet");
      console.log("ModuleList not retrieved");
      this.router.navigate(['/']);
    }
  }

  test() {
    console.log("Module");
    console.log(this.module);
  }


  onSelectModule(module) {
    this.module = module;
    this.sendModule.emit(this.module);
  }

  getModuleList() {
    console.log("getting module list...");
    this.dataService.getModuleList().then(modules => {
      this.moduleList = [];
      for (let item in modules) {
        this.moduleList.push(item);
      }
    });
  }
}
