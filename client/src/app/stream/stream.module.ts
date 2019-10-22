import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { VideoJsComponent } from './video-js/video-js.component';
import { LivestreamsComponent } from './livestreams/livestreams.component';
import { StreamComponent } from './stream.component';
import { AvatarModule } from 'ngx-avatar';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  
  {path: '', component:LivestreamsComponent},
  {path: ":username", component: VideoJsComponent}
];

@NgModule({
  declarations: [
    VideoJsComponent,
    LivestreamsComponent,
    StreamComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    AvatarModule
  ]
})
export class StreamModule { }
