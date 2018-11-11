import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { barChartOption } from './bar-chart.model';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  @Input() option: barChartOption;
  @ViewChild('canvas') canvas: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    const ctx = (this.canvas.nativeElement as HTMLCanvasElement).getContext('2d')
    const config: Chart.ChartConfiguration = {
      type: 'bar',
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
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Bar Chart'
        },
        scales: {


        },
      

      }
    };
    new Chart(ctx, config)
  }

}
