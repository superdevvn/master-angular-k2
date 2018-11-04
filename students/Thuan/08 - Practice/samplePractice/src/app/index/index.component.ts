import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';
import { empty } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  name:string;
  constructor(private utilityService:UtilityService,private route:Router) { }

  ngOnInit() {
  this.name=this.utilityService.user.username;
    console.log(this.utilityService.user.username);
  }
  logout(){
    localStorage.removeItem(this.utilityService.access_token);
    this.route.navigate(['/login'])
  } 

}
