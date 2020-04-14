import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ChildApp1SharedModule} from "../../projects/child-app1/src/app/app.module";
import {ChildApp2SharedModule} from "../../projects/child-app2/src/app/app.module";
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChildApp1SharedModule.forRoot(),
    ChildApp2SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
