import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-leer-activiteiten',
  templateUrl: './leer-activiteiten.component.html',
  styleUrls: ['./leer-activiteiten.component.css']
})
export class LeerActiviteitenComponent implements OnInit {

  @Input() selectedId: string;

  leeractiviteiten = [
    "hoorcollege 1",
    "discussiecollege 1",
    "werkcollege 1",
    "Weekopdrachten 1"
  ];

  constructor() { }

  ngOnInit() {
    if (!this.selectedId) this.selectedId = "None";
  }

}
