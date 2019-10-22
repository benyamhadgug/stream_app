import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import { SettingsComponent } from './settings/settings.component';
import { StreamModule } from './stream/stream.module';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    StreamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
