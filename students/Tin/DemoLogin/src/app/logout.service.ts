import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  constructor(private router: Router,
    private utilityService: UtilityService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.utilityService.getUser().username) {
      return true;
    } else {
      this.router.navigate(['']);
      alert(`You have login to my website.
Your current account is: ${this.utilityService.getUser().username}.
If you want login with another account, please logout first.
Thank you !!!`);
      return false;
    }
  }
}
