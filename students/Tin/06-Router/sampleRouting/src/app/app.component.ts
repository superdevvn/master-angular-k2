import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sampleRouting';
  constructor(private router: Router){
    
  }
  gotoTest1(){
    this.router.navigate(['/test1']);
  }
  gotoTest2(){
    this.router.navigate(['/test2']);
  }
}
