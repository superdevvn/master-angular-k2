import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  firstname:string;
  lastname:string;
  status: boolean;
  constructor() { 
    this.firstname='Supper';
  }

  ngOnInit() {
  }
  clickMe(){
    
  }
  keyUp(){
    this.lastname=this.firstname;
  }

}
