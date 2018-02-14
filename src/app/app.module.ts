import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AutoComponent} from './components/auto/auto.component';
import {HttpService} from './services/http.service';
import {HttpClientModule} from '@angular/common/http';
import { FilterComponent } from './components/filter/filter.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AutoComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
