import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { UtilityService } from '../utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router,
    private utilityService: UtilityService) { }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    $.getScript('assets/pike-admin/js/pikeadmin.js');
  }

  logout() {
    this.utilityService.removeUser();
    this.router.navigate(['login']);
  }
}
