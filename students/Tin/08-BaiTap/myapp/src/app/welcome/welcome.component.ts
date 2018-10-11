import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  username = '';
  constructor(private router: Router,
    private utilityService: UtilityService) { }

  ngOnInit() {
    this.username = this.utilityService.getUser().username;
  }

  logout() {
    this.router.navigate(['login']);
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.utilityService.removeUser();
  }
}
