import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  firstName: string;
  lastName: string;
  status: boolean = true;
  constructor() {
    this.firstName = 'Super';
  }

  ngOnInit() {
  }

  clickMe(){
    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.status);
  }
  keyUp(){
    this.lastName = this.firstName;
  }
}
