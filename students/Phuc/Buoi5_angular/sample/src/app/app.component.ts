import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Super Dev';
  constructor(){
    console.log('constructor');
  }
  ngOnInit(){
    console.log('ngOnInit');
    console.log(document.getElementById(this.title));
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit');
    console.log(document.getElementById(this.title));
  }
}
