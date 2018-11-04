import { Component } from '@angular/core';
import { InputControlComponent } from './input-control/input-control.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  a:string="SuperDev";
  onKeyup(value:string){
      console.log(value);
  }
}

