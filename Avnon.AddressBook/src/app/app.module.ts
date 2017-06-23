import { NgModule, APP_INITIALIZER }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { AuthHttpServiceFactory } from './app.helper';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { AppComponent }  from './app.component';
import { HomeComponent }  from './components/home.component';
import { LoginComponent }  from './components/login.component';
import { ContactSummaryComponent }  from './components/contactSummary.component';
import { ContactDetailsComponent }  from './components/contactDetails.component';
import { SearchBarComponent } from './components/searchBar.component';
import { TagControlComponent } from './components/tagControl.component';
import { routing } from "./app.router";
import { ConfigService, ConfigLoader } from "config/config.service";
import { AuthHttp, JwtHelper } from "angular2-jwt/angular2-jwt";
import { FacebookService } from "ngx-facebook";
import { PubNubAngular } from 'pubnub-angular2';

@NgModule({
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: ConfigLoader,
      deps: [ ConfigService ],
      multi: true,
    },
    {
      provide: AuthHttp,
      useFactory: AuthHttpServiceFactory,
      deps: [Http, RequestOptions, ConfigService],
    },
    PubNubAngular,
    JwtHelper,
    FacebookService,
    AuthGuard,
    AuthService
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
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
