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
    if (window.confirm('Are you sure ???')) {
      this.utilityService.removeUser();
      this.router.navigate(['login']);
    }
  }
}
