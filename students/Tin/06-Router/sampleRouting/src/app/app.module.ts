import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Children1Component } from './children1/children1.component';
import { Children2Component } from './children2/children2.component';
import { Children3Component } from './children3/children3.component';
import { Children4Component } from './children4/children4.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    Children1Component,
    Children2Component,
    Children3Component,
    Children4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
