import { Component, OnInit } from '@angular/core';
import {UtilityService} from '../utility.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  static index=0;
  constructor(private utilityService:UtilityService) { }

  ngOnInit() {
    RoleComponent.index++;
    console.log("Index:"+RoleComponent.index);
    this.utilityService.count++;
    this.utilityService.increase();
  }

}
