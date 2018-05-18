import { Component, OnInit, Input } from '@angular/core';
import { PrestatieIndicator } from './prestatie-indicator';
import { PrestatieIndicatoren } from './prestatie-indicatoren';
//import { INDICATORS } from './mock-presentatie-indicatoren';
import { PrefixNot } from '@angular/compiler';
import { DataService } from '../data.service';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';



@Component({
  selector: 'app-prestatie-indicatoren',
  templateUrl: './prestatie-indicatoren.component.html',
  styleUrls: ['./prestatie-indicatoren.component.css']
})
export class PrestatieIndicatorenComponent implements OnInit {

  allPis: PrestatieIndicatoren[] = [];
  selectedAchievementIndicators: PrestatieIndicatoren = new PrestatieIndicatoren();

  @Input() selectedId: string;
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getIndicators();
  }

  private getIndicators(): void {

    this.dataService.getIndicators().subscribe(indicators => {
      this.allPis = indicators;
      this.selectedAchievementIndicators.indicators = [];

      for (var key in this.allPis[this.selectedId]) {
        if (key == "studyModuleId") {
          this.selectedAchievementIndicators.studyModuleId = this.allPis[this.selectedId][key];
        }
        else if (key == "indicators") {
          for (var key2 in this.allPis[this.selectedId][key]) {
            this.selectedAchievementIndicators.indicators.push(this.allPis[this.selectedId][key][key2]);
          }
        }
      }
    });

  }

}
