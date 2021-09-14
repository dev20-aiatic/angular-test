import { BlognewComponent } from './../dashboard/blognew/blognew.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { RegisterComponent } from 'src/app/components/auth/register/register.component';
import { LoginComponent } from 'src/app/components/auth/login/login.component';
import { AuthComponent } from './auth.component';
import { HomeComponent } from '../dashboard/home/home.component';
import { VideoComponent } from '../dashboard/video/video.component';
import { BlogComponent } from '../dashboard/blog/blog.component';
import { BlogdetailComponent } from '../dashboard/blogdetail/blogdetail.component';
import { BlogloginComponent } from '../dashboard/bloglogin/bloglogin.component';
import { BlogGuard } from 'src/app/services/blog-guard.service';


const routes: Routes = [
    {
    path:'',
    component:AuthComponent,
    children:[
      {path:'',component:LoginComponent},
      {path:'register',component:RegisterComponent},
      {path:'home',component:HomeComponent},
      {path:'video',component:VideoComponent},
      {path:'post/:id',component:BlogdetailComponent},
      {path:'posts',component:BlogComponent},
      {path:'wp-login', component:BlogloginComponent},
      {path:'newpost',component:BlognewComponent, canActivate: [BlogGuard]},
      { path:'**',redirectTo:''}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }
