import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoJsComponent } from './video-js/video-js.component';
import { MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import { LivestreamsComponent } from './livestreams/livestreams.component';
import { SettingsComponent } from './settings/settings.component';
import { ThumbnailsComponent } from './livestreams/thumbnails.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoJsComponent,
    LivestreamsComponent,
    SettingsComponent,
    ThumbnailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
