import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Chart } from 'chart.js';
import { DataService } from '../data.service';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router } from '@angular/router';
import { ChangesServiceService } from '../changes-service.service';

@Component({
  selector: 'app-docenten-visualisatie',
  templateUrl: './docenten-visualisatie.component.html',
  styleUrls: ['./docenten-visualisatie.component.css']
})
export class DocentenVisualisatieComponent implements OnInit, OnChanges {

  @Input() laId: string;
  @Input() module: string;


  //Wellicht nog iets met onchanges doen?

  private chartMaterial = Chart;
  private chartTeacher = Chart;
  private chartComprehension = Chart;


  private uid: string;
  private hiding = false;

  private commentList = [
    {
      commentTitle: '<Titel opmerking>',
      commentBody: '<Body van opmerking>',
      rId: '',
      wResponse: false,
      responseMsg: '',
      reply: ""
    }
  ];

  dataTest = [0, 0, 0];

  constructor(
    private dataservice: DataService,
    private router: Router,
    private changesService: ChangesServiceService
  ) { }

  ngOnInit() {
    this.chartMaterial = this.setChart(this.chartMaterial, 'canvas', 'Materiaal Beoordeling', [0, 0, 0]);
    this.chartTeacher = this.setChart(this.chartTeacher, 'canvasTeacher', 'Docent Beoordeling', [0, 0, 0]);
    this.chartComprehension = this.setDualChart(this.chartComprehension, 'canvasComprehension', 'Begrip Beoordeling', [0, 0]);

    this.uid = this.dataservice.getCurrentId();
    console.log("gebruikers uid: ", this.uid);

    this.getFeedback(this.module, this.laId);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["module"]) {
      this.hiding = true;

    }
    if (changes["laId"]) {
      this.hiding = false;
      this.getFeedback(this.module, this.laId);

    }
  }

  getFeedback(module: string, laId: string) {
    console.log("Get feedback");
    //let module = "IOT1_01";
    //let laId = "TempID"
    this.dataservice.getFeedback(module, laId).subscribe(res => {
      let materialScore = this.getScores(res, 'materialScore');
      this.changeChart(materialScore, this.chartMaterial);


      let teacherScore = this.getScores(res, 'teacherScore');
      this.changeChart(teacherScore, this.chartTeacher);

      let comprehensionScore = this.getScores(res, 'comprehensionScore');
      this.changeDualChart(comprehensionScore, this.chartComprehension);

      this.commentList = this.getComments(res);

      this.setRepliesSeen();
      for (let item in this.commentList) {
        this.getReply(this.commentList[item].rId, item);
      }

    })
  }

  setRepliesSeen() {
    let replyIds = [];
    
    for (let i in this.commentList) {
      replyIds.push(this.commentList[i]["rId"]);
    }

    this.dataservice.setRepliesSeen(this.module, replyIds, this.uid);
  }

  getReply(rId: string, i: string) {
    this.dataservice.getReply(this.module, rId).subscribe(res => {
      console.log("res msg");
      console.log(res["msg"]);
      if (res["msg"]) {
        this.commentList[i]["reply"] = res["msg"];
      }
    });
  }

  getComments(feedback: object) {
    let clist = [];

    for (let item in feedback) {
      let title = feedback[item]['commentTitle'];
      let body = feedback[item]['commentBody'];
      let rId = feedback[item]['rId'];
      if (title || body) {
        let comment = {
          commentTitle: title,
          commentBody: body,
          "rId": rId,
          "wResponse": false,
          "responseMsg": '',
          "reply": ""
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

  changeDualChart(scores, chart: Chart) {
    let newData = [scores['bad'], scores['good']];

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


  setDualChart(chart: Chart, canvas: string, title: string, dataset: number[]): Chart {
    let labels;
    let green = "#28a745";
    let red = "#dc3545";


    chart = new Chart(canvas, {
      "type": "bar",
      "data": {
        "labels": ["Niet begrepen", "Wel begrepen"],
        "datasets": [{
          "label": title,
          "data": dataset,
          "fill": false,
          "backgroundColor": [red + "a0", green + "a0"],
          "borderColor": [red, green],
          "hoverBackgroundColor": [red, green],
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

  teacherChanges() {

    this.changesService.setInfo(this.module, this.laId);

    this.router.navigate(['/teacher/changes']);
  }

  createResponse(rId: string) {
    for (let i in this.commentList) {
      if (this.commentList[i]["rId"] == rId) {
        this.commentList[i].wResponse = true;
        break;
      }
    }
  }

  cancelResponse(rId: string) {
    for (let i in this.commentList) {
      if (this.commentList[i]["rId"] == rId) {
        this.commentList[i].wResponse = false;
        this.commentList[i].responseMsg = "";
        break;
      }
    }
  }

  sendResponse(msg: string, rId: string) {
    this.dataservice.saveReply(this.module, this.uid, rId, msg);
    for (let i in this.commentList) {
      if (this.commentList[i]["rId"] == rId) {
        this.commentList[i].wResponse = false;
        this.commentList[i].responseMsg = "";
        this.commentList[i].reply = msg;
        break;
      }
    }
  }

}
