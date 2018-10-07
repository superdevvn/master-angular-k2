import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  firstname:string;
  status:boolean = true;
  constructor() { 
    this.firstname = 'Super Dev'
  }

  ngOnInit() {
  }

  clickMe(){
    alert(this.firstname);
    console.log(this.status);
  }
}
