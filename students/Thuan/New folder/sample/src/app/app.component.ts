import { Component } from '@angular/core';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { PieChartOption } from './pie-chart/pie-chart.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  pieChartOption:PieChartOption;
  constructor(){
    this.initPieChart();
  }
  initPieChart(){
    this.pieChartOption={
      title:'Demo',
      data:
    }
  }
}
