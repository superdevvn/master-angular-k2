import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SuperdevAngularCoreModule } from 'superdev-angular-core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    SuperdevAngularCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
