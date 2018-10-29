import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { RoleComponent } from './role/role.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path: '', component: IndexComponent, canActivate: [AuthGuardService], children: [
      { path: 'index', component:IndexComponent },
      { path: 'user', component: UserComponent },
      { path: 'role', component: RoleComponent }, 
    ]
  },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
