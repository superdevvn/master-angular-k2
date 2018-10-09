import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', component: AppComponent, canActivate: [AuthService], children: [
    {path: '', component: WelcomeComponent}
  ]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
