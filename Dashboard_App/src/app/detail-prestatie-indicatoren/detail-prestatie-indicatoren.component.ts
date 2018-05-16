import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { PrestatieIndicator } from '../prestatie-indicatoren/prestatie-indicator';

@Component({
  selector: 'app-detail-prestatie-indicatoren',
  templateUrl: './detail-prestatie-indicatoren.component.html',
  styleUrls: ['./detail-prestatie-indicatoren.component.css']
})
export class DetailPrestatieIndicatorenComponent implements OnInit {

  @Input() ai: PrestatieIndicator;

  constructor() { }

  ngOnInit() {
    console.log("ai:");
    console.log(this.ai);
  }

}
