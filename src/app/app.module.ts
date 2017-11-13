import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from
  "@angular/forms";
import { AppComponent } from './app.component';
import { HComponent } from './h/h.component';
import { SComponent } from './s/s.component';
import { SsComponent } from './ss/ss.component';
import { Ss2Component } from './ss2/ss2.component';
import { Ss3Component } from './ss3/ss3.component';
import { Ss4Component } from './ss4/ss4.component';


@NgModule({
  declarations: [
    AppComponent,
    HComponent,
    SComponent,
    SsComponent,
    Ss2Component,
    Ss3Component,
    Ss4Component
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
