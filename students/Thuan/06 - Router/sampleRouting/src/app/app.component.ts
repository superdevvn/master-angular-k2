import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private router:Router){}
  gototest1(){
    this.router.navigate(['/test1']);
  }
  gototest1_1(){
    this.router.navigate(['/test1/child']);
  }
  gototest2_2(){
    this.router.navigate(['/test2']);
  }
  gototest2_3(){
    this.router.navigate(['/test2']);
  }
}

