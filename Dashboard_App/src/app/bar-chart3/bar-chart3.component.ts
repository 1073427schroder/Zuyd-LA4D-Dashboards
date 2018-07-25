import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Chart } from 'chart.js';
import { DataService } from '../data.service';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-bar-chart3',
  templateUrl: './bar-chart3.component.html',
  styleUrls: ['./bar-chart3.component.css']
})
export class BarChart3Component implements OnInit, OnChanges {

  @Input() laId: string;
  @Input() module: string;


  //Wellicht nog iets met onchanges doen?

  private chartMaterial = Chart;
  private chartTeacher = Chart;
  private chartComprehension = Chart;

  private materialScoreSelf = "Niet beoordeeld";
  private teacherScoreSelf = "Niet beoordeeld";
  private comprehensionScoreSelf = "Niet beoordeeld";
  private commentSelf = {
    title: "Test titel",
    body: "Test body"
  };

  private uid: string;
  private hiding = false;

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
      this.resetValues();
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
      // set own feedback
      this.setOwnScore("materialScoreSelf", this.getOwnScore(res, "materialScore", this.uid));

      let teacherScore = this.getScores(res, 'teacherScore');
      this.changeChart(teacherScore, this.chartTeacher);
      this.setOwnScore("teacherScoreSelf", this.getOwnScore(res, "teacherScore", this.uid));

      let comprehensionScore = this.getScores(res, 'comprehensionScore');
      this.changeDualChart(comprehensionScore, this.chartComprehension);
      this.setOwnScore("comprehensionScoreSelf", this.getOwnScore(res, "comprehensionScore", this.uid));

      this.commentList = this.getComments(res);
      //get own comment
      this.getOwnComment(res, this.uid);
      console.log(this.commentList);
    })
  }

  resetValues() {
    this.materialScoreSelf = "Niet beoordeeld";
    this.teacherScoreSelf = "Niet beoordeeld";
    this.comprehensionScoreSelf = "Niet beoordeeld";
    this.commentSelf = {
      title: "Geen opmerking",
      body: ""
    };

  }

  setOwnScore(elementid: string, score: string): void {
    let classname;

    switch (score) {
      case "good":
        classname = "greenish";
        break;
      case "neutral":
        classname = "blueish";
        break;
      case "bad":
        classname = "reddish";
        break;
      default:
        classname = "grayish";
        break;
    }
    document.getElementById(elementid).setAttribute("class", classname);

    this.setOwnScoreText(elementid, score);
  }

  setOwnScoreText(categorie: string, score: string) {
    let text;
    let compText;
    switch (score) {
      case "good":
        text = "Goed";
        compText = "Wel begrepen";
        break;
      case "neutral":
        text = "Neutraal";
        break;
      case "bad":
        text = "Slecht";
        compText = "Niet begrepen";
        break;
      default:
        text = "Niet beoordeeld";
        compText = "Niet beoordeeld";
        break;
    }

    switch (categorie) {
      case "materialScoreSelf":
        this.materialScoreSelf = text;
        break;
      case "teacherScoreSelf":
        this.teacherScoreSelf = text;
        break;
      case "comprehensionScoreSelf":
        this.comprehensionScoreSelf = compText;
        break;
      default:
        break;
    }

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

  getOwnComment(feedback: object, uid: string): void {
    for (let item in feedback) {
      let title = feedback[item]['commentTitle'];
      let body = feedback[item]['commentBody'];

      if (feedback[item]["uid"] == uid) {
        let comment;
        if (title || body) {
          comment = {
            "title": title,
            "body": body
          };
          // remove comment from other comments
          // find correct comment
          for (let i in this.commentList) {
            if (this.commentList[i].commentTitle == title && this.commentList[i].commentBody == body) {
              this.commentList.splice(Number(i), 1);
            }
          }
        }
        else {
          comment = {
            "title": "Geen opmerking",
            "body": ""
          };
        }
        this.commentSelf = comment;
        break;
      }
    }
  }


  getOwnScore(feedback: object, criteria: string, id: string): string {
    let ownScore: string = "Not found";

    for (let item in feedback) {
      if (feedback[item]["uid"] == id) {
        ownScore = feedback[item][criteria];
        break;
      }
    }

    return ownScore;
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

}

