import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  
  // { path: '', component:AppComponent  },
  {path: 'stream', loadChildren:()=> import('./stream/stream.module').then(m=> m.StreamModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
