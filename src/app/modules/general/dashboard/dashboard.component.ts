import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { URLLoader } from 'src/app/main/configs/loader';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let data = [20000, 14000, 12000, 15000, 18000, 19000, 22000];
    let data2 = [90000, 78000, 65000, 44000, 98000, 32000, 43000];

    let labels = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    var ctx1 = document.getElementsByClassName("revenue-chart");
    var ctx2 = document.getElementsByClassName("expense-chart");
    this.renderChart(data, labels, ctx1, 'rgba(245, 255, 61, 1)');
    this.renderChart(data2, labels, ctx2, 'rgba(5, 255, 30, 1)');
  }


  renderChart(data, labels, ctx, color) {


    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: '',
          data: data,
          backgroundColor: color,
          borderColor: color,
        }]
      },
    });
  }

}
