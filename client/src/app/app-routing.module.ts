import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';



const routes: Routes = [
  
  { path: 'settings', component:SettingsComponent },
  {path: 'stream', loadChildren:()=> import('./stream/stream.module').then(m=> m.StreamModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
