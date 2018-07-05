import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bar-chart3',
  templateUrl: './bar-chart3.component.html',
  styleUrls: ['./bar-chart3.component.css']
})
export class BarChart3Component implements OnInit {

  //Wellicht nog iets met onchanges doen?

  private chart = Chart;

  dataTest = [0, 0, 0];
  
  constructor(
    private dataservice: DataService
  ) { }

  ngOnInit() {

    let labels;
    let green = "#28a745";
    let blue = "#007bff";
    let red = "#dc3545";

    this.chart = new Chart('canvas', {
      "type": "bar",
      "data": {
        "labels": ["Slecht", "Neutraal", "Goed"],
        "datasets": [{
          "label": "Materiaal Beoordeling",
          "data": this.dataTest, //7 added for spacing
          "fill": false,
          "backgroundColor": [red + "a0", blue + "a0", green + "a0"],
          "borderColor": [red, blue, green],
          "hoverBackgroundColor": [red, blue, green],
          "borderWidth": 1
        }]
      },
      "options": {
        "legend": {
          "labels": {
            boxWidth: 0,
            generateLabels: function (chart) {
              labels = Chart.defaults.global.legend.labels.generateLabels(chart);
              //labels[0].fillStyle = 'green';
              return labels;
            }
          }
        },
        "scales": {
          "yAxes": [{
            "ticks": {
              "beginAtZero": true
            }
          }]
        }
      }
    });

  }

  getFeedback() {
    console.log("Get feedback");
    let module = "IOT1_01";
    let laId = "TempID"
    this.dataservice.getFeedback(module, laId).subscribe(res => {
      this.getMaterialScores(res);

    })
  }

  getMaterialScores(feedback) {
    let materialScores = {
      'bad': 0,
      'neutral': 0,
      'good': 0
    }
    for (let item in feedback) {
      switch (feedback[item]['materialScore']) {
        case 'bad':
          materialScores.bad++;
          break;
        case 'neutral':
          materialScores.neutral++;
          break;
        case 'good':
          materialScores.good++;
          break;
        default:
          console.log('error in score');
          break;
      }
    }
    this.changeChart(materialScores);
  }

  changeChart(scores) {
    let newData = [scores['bad'], scores['neutral'], scores['good']];

    this.chart.data.datasets.forEach((dataset) => {
      dataset.data = newData;
    });
    this.chart.update();
  }

}
