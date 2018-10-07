import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './login/main/main.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './login/dashboard/dashboard.component';
import { RoleComponent } from './login/role/role.component';
import { UserComponent } from './login/user/user.component';

const routes: Routes = [
  {path:'',component:MainComponent,children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'role',component:RoleComponent},
    {path:'user',component:UserComponent},
  ]},
  {path:'login',component:LoginComponent,pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
