import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(private router: Router,
    private utilityService: UtilityService) { }

  ngOnInit() {
  }

  login() {
    if (this.username.valueOf() === 'admin' && this.password.valueOf() === 'admin') {
      this.utilityService.setUser(this.username, this.password);
      this.router.navigate(['']);
    } else {
      alert('This account is not available !!!');
    }
  }
}
