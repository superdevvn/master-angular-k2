import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanDeactivate } from '@angular/router';
import { UtilityService } from './utility.service';
import { AppComponent } from './app.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate, CanDeactivate<AppComponent> {

  username = '';

  constructor(private router: Router,
    private utilityService: UtilityService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.utilityService.getUser().username) {
      this.username = this.utilityService.getUser().username;
      return true;
    } else {
      this.router.navigate(['/login']);
      alert('You must login to go to my website !!!');
      return false;
    }
  }

  canDeactivate(
    component: AppComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return window.confirm(`Are you sure ${this.username} ???
(Bạn chắc chưa ${this.username} ???)`);
  }
}
