import { Component } from '@angular/core';
import { PieChartOption } from './pie-chart/pie-chart.model';
import { barChartOption } from './bar-chart/bar-chart.model';
import { lineChartOption } from './line-chart/line-chart.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  pieChartOption: PieChartOption;
  barChartOption: barChartOption;
  lineChartOption: lineChartOption;
  constructor() {
    this.initPieChart();
  }
  initPieChart() {
    this.pieChartOption = {
      title: 'Demo',
      data: [{
        key: 'First',
        value: 40,
        color: 'red'
      },
      {
        key: 'Second',
        value: 30,
        color: 'yellow'
      },
      {
        key: 'Third',
        value: 30,
        color: 'green'
      },
      ]
    }
    this.barChartOption = {
      title: 'Demo',
      data: {
        xTitle: ['Thang 1', 'Thang 2', 'Thang 3'],
        items: [{
          label: 'Thu',
          values: [15,20,30],
          color:'red'
        }, {
          label: 'Chi',
          values: [30,70,50],
          color:'yellow'
        },
        ]
      }
    }
    
    this.lineChartOption = {
      title: 'Demo',
      data: {
        xTitle: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        items: [{
          label: 'Thu',
          values: [15,30,20,60,30,40,80],
          fill:false,
          
        }, {
          label: 'Chi',
          values: [30,60,40,30,80,40,30],
          fill:false,
          
        },
        ]
      }
    }
  }
}
