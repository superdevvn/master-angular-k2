import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';

  constructor () {
    console.log('constructor')
  }

  ngOnInit(){
    console.log(document.getElementById(this.title));
    console.log('ngOnInit')
  }

  ngAfterViewInit(){
    console.log(document.getElementById(this.title));
    console.log('ngAfterViewInit')
  }
}
