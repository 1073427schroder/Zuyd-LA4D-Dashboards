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
    aspects: [
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
        aspect: "Onderbouwing",
        description: "De onderbouwingen voor de gemaakte keuzes en beslissingen zijn aanwezig, relevant en indien nodig voorzien van bronverwijzingen",
        txt2: "Onderbouwingen zijn erg zwak",
        txt4: "Onderbouwingen zijn matig",
        txt6: "Onderbouwingen zijn voldoende",
        txt8: "Onderbouwingen zijn goed",
        txt10: "Onderbouwingen zijn zeer goed",
        weight: 1
      }
    ]
  };


  constructor() { }

  ngOnInit() {


    //console.log(Object.values(this.pi.aspects));

    for (let prop in this.pi.aspects) {
      for (let p in Object.values(this.pi.aspects[prop])) {
        //console.log(Object.values(this.pi.aspects[prop])[p]);
      }
      /*
      for (let p in this.pi.aspects[prop]) {
        console.log(Object.values(this.pi.aspects[prop]));
      }
      */
      //console.log("--- new object ---");
      //console.log(Object.values(this.pi.aspects[prop]))
      //console.log(this.pi.aspects[prop]);
    }

    /*
    //console.log(this.pi);
    for (var prop in this.pi.aspects) {
      for (var p in this.pi.aspects[prop]) {
        console.log(p);
      }
    }
    //console.log(this.pi.aspects[0].txt10);
    */

  }

}
