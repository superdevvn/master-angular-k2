import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { MainComponent } from './main/main.component';
import { UtilityService } from './utility.service';
import { AuthGuardService } from './auth-guard.service';
import { RoleComponent } from './role/role.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    MainComponent,
    RoleComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UtilityService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
