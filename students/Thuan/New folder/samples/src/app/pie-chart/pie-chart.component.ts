import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { PieChartOption } from './pie-chart.model';

import * as Chart from 'chart.js';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
    @Input() option: PieChartOption;
    @ViewChild('canvas') canvas: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    const ctx=(this.canvas.nativeElement as HTMLCanvasElement).getContext('2d')
    const config : Chart.ChartConfiguration= {
      type: 'pie',
      data: {
          datasets: [{
              data:this.option.data.map(e=>e.value),
              backgroundColor:this.option.data.map(e=>e.color) ,
              label: this.option.title,
              
          }],
          labels:this.option.data.map(e=>e.key)
      },
      options: {
          responsive: true
      }
  };
  new Chart(ctx,config)
  }

}
