import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { lineChartOption } from './line-chart.model';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  @Input() option: lineChartOption;
  @ViewChild('canvas') canvas: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    const ctx = (this.canvas.nativeElement as HTMLCanvasElement).getContext('2d')
    const config: Chart.ChartConfiguration = {
      type: 'line',
      data: {
        labels: this.option.data.xTitle,
        datasets: this.option.data.items.map(e => {
          return {
            label: e.label,
            data: e.values,
            backgroundColor: e.color,
          }
        
        })
      },
      options: {
        responsive: true,
        title: {
            display: true,
            text: 'Chart.js Line Chart'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Month'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                }
            }]
        }
    }
    };
    new Chart(ctx, config)
  }

}

