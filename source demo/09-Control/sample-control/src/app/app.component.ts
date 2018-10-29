import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  labelUsername = 'Label Username';
  a: string = 'SuperDev';

  onKeyup(value: string){
    console.log(value);
  }
}
