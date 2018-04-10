import { Component, OnInit } from '@angular/core';
import { PrestatieIndicator } from './prestatie-indicator';
import { TestObj } from './test';



@Component({
  selector: 'app-prestatie-indicatoren',
  templateUrl: './prestatie-indicatoren.component.html',
  styleUrls: ['./prestatie-indicatoren.component.css']
})
export class PrestatieIndicatorenComponent implements OnInit {


  pi: PrestatieIndicator = {
    description: "De student toont in de casus aan dat hij kan werken binnen en volgens het architectuur raamwerk. Hij toont hierbij aan dat hij de analyse rondom de bedrijfs-, applicatie-, en infrastructuurarchitectuur zelfstandig kan uitvoeren, dit gestandaardiseerd kan modelleren, en kan onderbouwen",
    product: "Architectuurrapport",
    criteria: "",
    instructions: "",
    arr: [
      {
        aspect: "Analyse (principes)",
        description: "De analyse betreffende bedrijfs-, applicatie-, en infrastructuurarchitectuur is uitgevoerd op basis van de juiste principes en gestructureerd uitgevoerd en correct (stapgewijs) beschreven",
        txt2: "Analyses zijn slechts gedeeltelijk uitgevoerd en stappen zijn de niet correct beschreven",
        txt4: "Analyses zijn slechts gedeeltelijk uitgevoerd en de stappen zijn onvoldoende beschreven",
        txt6: "Analyses zijn goed uitgevoerd, maar niet alle relevante principes zijn meegenomen en de stappen zijn onvoldoende beschreven",
        txt8: "Analyses zijn volledig, maar niet overal correct de analyse stappen doorlopen",
        txt10: "Analyses zijn volledig en correct",
        weight: 1
      },
      {
        aspect: "Analyse (principes)",
        description: "De analyse betreffende bedrijfs-, applicatie-, en infrastructuurarchitectuur is uitgevoerd op basis van de juiste principes en gestructureerd uitgevoerd en correct (stapgewijs) beschreven",
        txt2: "Analyses zijn slechts gedeeltelijk uitgevoerd en stappen zijn de niet correct beschreven",
        txt4: "Analyses zijn slechts gedeeltelijk uitgevoerd en de stappen zijn onvoldoende beschreven",
        txt6: "Analyses zijn goed uitgevoerd, maar niet alle relevante principes zijn meegenomen en de stappen zijn onvoldoende beschreven",
        txt8: "Analyses zijn volledig, maar niet overal correct de analyse stappen doorlopen",
        txt10: "Analyses zijn volledig en correct",
        weight: 1
      }
    ]
  };


  constructor() { }

  ngOnInit() {
  }

}
