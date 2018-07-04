import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datavis',
  templateUrl: './datavis.component.html',
  styleUrls: ['./datavis.component.css']
})
export class DatavisComponent implements OnInit {

  data = [
    { name: 'Slecht', color: '#dc3545', value: 2 }
    , { name: 'Neutraal', color: '#007bff', value: 4 }
    , { name: 'Goed', color: '#28a745', value: 6}
  ];


  constructor() { }

  ngOnInit() {
  }

}
