import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { VideoJsComponent } from './video-js/video-js.component';
import { LivestreamsComponent } from './livestreams/livestreams.component';
import { ThumbnailsComponent } from './livestreams/thumbnails.component';
import { StreamComponent } from './stream.component';

const routes: Routes = [
  
  {path: '', component:LivestreamsComponent},
  {path: ":username", component: VideoJsComponent}
];

@NgModule({
  declarations: [
    VideoJsComponent,
    LivestreamsComponent,
    ThumbnailsComponent,
    StreamComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StreamModule { }
