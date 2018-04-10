import { Component, OnInit, Input } from '@angular/core';
import { PrestatieIndicator } from './prestatie-indicator';
import { PrestatieIndicatoren } from './prestatie-indicatoren';
import { INDICATORS } from './mock-presentatie-indicatoren';
import { PrefixNot } from '@angular/compiler';



@Component({
  selector: 'app-prestatie-indicatoren',
  templateUrl: './prestatie-indicatoren.component.html',
  styleUrls: ['./prestatie-indicatoren.component.css']
})
export class PrestatieIndicatorenComponent implements OnInit {

  //multiplePi: PrestatieIndicatoren = INDICATORS;
  multiplePi: PrestatieIndicatoren;
  dummyPi: PrestatieIndicatoren = new PrestatieIndicatoren();


  @Input() selectedId: number;

  constructor() { }

  ngOnInit() {
    this.multiplePi = this.dummyPi;
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

  }

  onSelect() {
    if (this.selectedId == INDICATORS.studyModuleId) {
      this.multiplePi = INDICATORS;
    }
    else {
      this.multiplePi = this.dummyPi;
    }
  }

}
