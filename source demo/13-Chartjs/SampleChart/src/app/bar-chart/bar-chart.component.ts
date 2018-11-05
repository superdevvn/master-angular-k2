import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { BarChartOption } from './bar-chart.model';
import * as Chart from 'chart.js';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  @Input() option: BarChartOption;
  @ViewChild('canvas') canvas: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const ctx = (this.canvas.nativeElement as HTMLCanvasElement).getContext('2d');
    const config: Chart.ChartConfiguration = {
      type: 'bar',
      data: {
        labels: this.option.data.xTitles,
        datasets: this.option.data.items.map(e=>{
          return {
            label: e.label,
            backgroundColor: e.color,
            data: e.values
          }
        })
      },
      options: {
        responsive: true,
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Bar Chart'
        },
        scales: {
          yAxes: [{
            ticks: {
              min: 0,
              max: 100
            }
          }]
        }
      }
    };

    new Chart(ctx, config);
  }
}
