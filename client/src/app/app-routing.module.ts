import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user-management/login/login.component';
import { RegisterComponent } from './user-management/register/register.component';
import { LogoutComponent } from './user-management/logout/logout.component';
import { SettingsComponent } from './settings/settings.component';


import { DeactivateGuard } from './guards/logout.guard';


const routes: Routes = [
  {path: 'home', component: HomeComponent}, 
  {path: 'login', component: LoginComponent}, 
  {path: 'register', component: RegisterComponent}, 
  {path: 'logout', component: LogoutComponent}, 
  // {path: '**', component: HomeComponent},
  {path: 'settings', component:SettingsComponent },
  {path: 'stream', loadChildren:()=> import('./stream/stream.module').then(m=> m.StreamModule),  runGuardsAndResolvers: 'always'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
