import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { RegisterComponent } from 'src/app/components/auth/register/register.component';
import { LoginComponent } from 'src/app/components/auth/login/login.component';
import { AuthComponent } from './auth.component';
import { HomeComponent } from '../dashboard/home/home.component';
import { VideoComponent } from '../dashboard/video/video.component';
import { BlogComponent } from '../dashboard/blog/blog.component';


const routes: Routes = [
    {
    path:'',
    component:AuthComponent,
    children:[
      {path:'',component:LoginComponent},
      {path:'register',component:RegisterComponent},
      {path:'home',component:HomeComponent},
      {path:'video',component:VideoComponent},
      {path:'blog',component:BlogComponent},
      { path:'**',redirectTo:''}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }
