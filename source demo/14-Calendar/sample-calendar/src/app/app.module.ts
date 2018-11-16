import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarControlComponent } from './calendar-control/calendar-control.component';
import { ObserverService } from './observer.service';
import { Observer1Service } from './observer1.service';
import { Observer2Service } from './observer2.service';

@NgModule({
  declarations: [
    AppComponent,
    CalendarControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ObserverService, Observer1Service, Observer2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
