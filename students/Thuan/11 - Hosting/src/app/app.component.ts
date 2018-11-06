import { Component } from '@angular/core';
import { ExcelService } from './excel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private excelService: ExcelService){}

  click(){
    this.excelService.import().then
    (
      abc => {
        console.log(abc)
      }
    )  
  }

  click2(){
    this.excelService.export()
  }
}
