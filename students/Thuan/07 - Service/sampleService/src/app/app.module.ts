import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './login/main/main.component';
import { LoginComponent } from './login/login.component';
import { RoleComponent } from './login/role/role.component';
import { DashboardComponent } from './login/dashboard/dashboard.component';
import { UserComponent } from './login/user/user.component';
import { UtilityServiceComponent } from './utility-service/utility-service.component';


const routes: Routes = [

]
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    RoleComponent,
    DashboardComponent,
    UserComponent,
    UtilityServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
