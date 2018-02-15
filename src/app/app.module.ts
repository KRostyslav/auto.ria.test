import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AutoComponent} from './components/auto/auto.component';
import {HttpService} from './services/http.service';
import {HttpClientModule} from '@angular/common/http';
import {FilterComponent} from './components/filter/filter.component';
import {GlobalService} from './services/global.service';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AutoComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HttpService,
    GlobalService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}