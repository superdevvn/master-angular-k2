import { Component } from '@angular/core';
import { PieChartOption } from './pie-chart/pie-chart.model';
import { BarChartOption } from './bar-chart/bar-chart.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  pieChartOption: PieChartOption;
  barChartOption: BarChartOption;
  constructor() {
    this.initPieChart();
  }

  initPieChart() {
    this.pieChartOption = {
      title: 'Demo',
      data: [
        {
          key: 'NET',
          value: 40
        },
        {
          key: 'Java',
          value: 35
        },
        {
          key: 'Angular',
          value: 50
        }
      ]
    };
    this.barChartOption = {
      title: 'Demo',
      data: {
        xTitles: ['Tháng 1', 'Tháng 2', 'Tháng 3'],
        items: [{
          label: 'Thu',
          values: [15, 20, 10]
        }, {
          label: 'Chi',
          values: [30, 40, 35]
        }]
      }
    }
  }
}
