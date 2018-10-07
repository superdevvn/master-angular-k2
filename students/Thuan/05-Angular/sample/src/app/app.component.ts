import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }
  constructor(){
    console.log('Constructor');
  }
  ngOnInit(){
    console.log('ngOnInit');
  }
 
}
