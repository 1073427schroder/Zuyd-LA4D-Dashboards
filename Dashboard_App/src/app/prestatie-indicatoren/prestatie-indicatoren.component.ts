import { Component, OnInit, Input } from '@angular/core';
import { PrestatieIndicator } from './prestatie-indicator';
import { PrestatieIndicatoren } from './prestatie-indicatoren';
import { INDICATORS } from './mock-presentatie-indicatoren';
import { PrefixNot } from '@angular/compiler';
import { DataService } from '../data.service';



@Component({
  selector: 'app-prestatie-indicatoren',
  templateUrl: './prestatie-indicatoren.component.html',
  styleUrls: ['./prestatie-indicatoren.component.css']
})
export class PrestatieIndicatorenComponent implements OnInit {

  //multiplePi: PrestatieIndicatoren = INDICATORS;
  multiplePi;
  dummyPi: PrestatieIndicatoren = new PrestatieIndicatoren();
  //multiplePi: PrestatieIndicatoren = this.dummyPi;
  allPis: PrestatieIndicatoren[] = [];
  selectedAchievementIndicators: PrestatieIndicatoren = new PrestatieIndicatoren();

  @Input() selectedId: string;

  otherId: string = "AP1_01";

  constructor(private dataService: DataService) { }

  ngOnInit() {
    /*
    // Todo: search for and set right pi
    // now simple check
    if (this.selectedId == INDICATORS.studyModuleId) {
      this.multiplePi = INDICATORS;
    }
    else {
      this.multiplePi = this.dummyPi;
    }
    */
    this.getIndicators();
  }

  onSelect() {
    /*
    if (this.selectedId == INDICATORS.studyModuleId) {
      this.multiplePi = INDICATORS;
    }
    else {
      this.multiplePi = this.dummyPi;
    }
    */
  }

  getIndicators(): void {
    //temp commented out
    this.dataService.getIndicators().subscribe(indicators => {
      this.allPis = indicators;
      //console.log(this.allPis);
      //console.log(this.otherId);
      //console.log(this.allPis[this.otherId]);
      //this.multiplePi = this.allPis[this.otherId];
      //console.log(this.multiplePi);
      this.selectedId = "1";

      this.selectedAchievementIndicators.indicators = [];
      for (var key in this.allPis[this.otherId]) {
        if (key == "studyModuleId") {
          //console.log(key + ": " + this.allPis[this.otherId][key]);
          this.selectedAchievementIndicators.studyModuleId = this.allPis[this.otherId][key];
          //console.log(this.selectedAchievementIndicators.studyModuleId);
          //console.log("look here ^^");
        }
        else if (key == "indicators") {
          console.log(key + ": ");
          console.log(this.allPis[this.otherId][key]);
          this.selectedAchievementIndicators.indicators.push(this.allPis[this.otherId][key]);
          console.log("selected Achievement:")
          console.log(this.selectedAchievementIndicators.indicators);
        }
        //this.selectedAchievementIndicators.indicators.push(this.allPis[this.otherId][key]);
        //console.log(this.selectedAchievementIndicators);
        //this.selected.push(modules[key]);
      }
    });
  }

}
