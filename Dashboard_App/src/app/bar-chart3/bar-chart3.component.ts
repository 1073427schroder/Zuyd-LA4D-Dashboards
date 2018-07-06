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

  private chartMaterial = Chart;
  private chartTeacher = Chart;
  private chartMotivation = Chart;

  private commentList = [
    {
      commentTitle: '<Titel opmerking>',
      commentBody: '<Body van opmerking>'
    }
  ];

  dataTest = [0, 0, 0];

  constructor(
    private dataservice: DataService
  ) { }

  ngOnInit() {
    this.chartMaterial = this.setChart(this.chartMaterial, 'canvas', 'Materiaal Beoordeling', [0, 0, 0]);
    this.chartTeacher = this.setChart(this.chartTeacher, 'canvasTeacher', 'Docent Beoordeling', [0, 0, 0]);
    this.chartMotivation = this.setChart(this.chartMotivation, 'canvasMotivation', 'Motivatie Beoordeling', [0, 0, 0]);

  }

  getFeedback() {
    console.log("Get feedback");
    let module = "IOT1_01";
    let laId = "TempID"
    this.dataservice.getFeedback(module, laId).subscribe(res => {
      let materialScore = this.getScores(res, 'materialScore');
      this.changeChart(materialScore, this.chartMaterial);
      let teacherScore = this.getScores(res, 'teacherScore');
      this.changeChart(teacherScore, this.chartTeacher);
      let motivationScore = this.getScores(res, 'motivationScore');
      this.changeChart(motivationScore, this.chartMotivation);
      this.commentList = this.getComments(res);
      console.log(this.commentList);
    })
  }

  getComments(feedback: object) {
    let clist = [];

    for (let item in feedback) {
      let title = feedback[item]['commentTitle'];
      let body = feedback[item]['commentBody'];
      if (title || body) {
        let comment = {
          commentTitle: title,
          commentBody: body
        };
        clist.push(comment);
      }
    }

    return clist;
  }

  getScores(feedback: object, criteria: string): object {
    let scores = {
      'bad': 0,
      'neutral': 0,
      'good': 0
    }

    for (let item in feedback) {
      switch (feedback[item][criteria]) {
        case 'bad':
          scores.bad++;
          break;
        case 'neutral':
          scores.neutral++;
          break;
        case 'good':
          scores.good++;
          break;
        default:
          console.log('error in score');
          break;
      }
    }

    return scores;
  }

  changeChart(scores, chart: Chart) {
    let newData = [scores['bad'], scores['neutral'], scores['good']];

    chart.data.datasets.forEach((dataset) => {
      dataset.data = newData;
    });
    chart.update();
  }


  setChart(chart: Chart, canvas: string, title: string, dataset: number[]): Chart {
    let labels;
    let green = "#28a745";
    let blue = "#007bff";
    let red = "#dc3545";


    chart = new Chart(canvas, {
      "type": "bar",
      "data": {
        "labels": ["Slecht", "Neutraal", "Goed"],
        "datasets": [{
          "label": title,
          "data": dataset,
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

    return chart;
  }

}
