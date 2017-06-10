import { NgModule, APP_INITIALIZER }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import { ContactSummaryComponent }  from './components/contactSummary.component';
import { ContactDetailsComponent }  from './components/contactDetails.component';
import { SearchBarComponent } from './components/searchBar.component';
import { TagControlComponent } from './components/tagControl.component';
import { routing } from "./app.router";
import { ConfigService, ConfigLoader } from "config/config.service";

@NgModule({
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: ConfigLoader,
      deps: [ ConfigService ],
      multi: true,
    }
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    ContactSummaryComponent,
    ContactDetailsComponent,
    SearchBarComponent,
    TagControlComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
