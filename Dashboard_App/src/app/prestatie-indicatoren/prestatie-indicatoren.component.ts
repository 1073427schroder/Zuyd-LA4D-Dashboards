import { Component, OnInit } from '@angular/core';
import { PrestatieIndicator } from './prestatie-indicator';
import { PrestatieIndicatoren } from './prestatie-indicatoren';
import { INDICATORS } from './mock-presentatie-indicatoren';



@Component({
  selector: 'app-prestatie-indicatoren',
  templateUrl: './prestatie-indicatoren.component.html',
  styleUrls: ['./prestatie-indicatoren.component.css']
})
export class PrestatieIndicatorenComponent implements OnInit {
  multiplePi: PrestatieIndicatoren = INDICATORS;
  
  constructor() { }

  ngOnInit() {
  }

}
