import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { RegisterComponent } from 'src/app/components/auth/register/register.component';
import { LoginComponent } from 'src/app/components/auth/login/login.component';
import { AuthComponent } from './auth.component';
import { HomeComponent } from '../dashboard/home/home.component';
import { VideoComponent } from '../dashboard/video/video.component';
/* import { BlogComponent } from '../blog/blog/blog.component';
import { BlognewComponent } from '../blog/blog/blognew/blognew.component';
import { BlogdetailComponent } from '../blog/blogdetail/blogdetail.component';
import { BlogloginComponent } from '../blog/blog/bloglogin/bloglogin.component';
import { BlogGuard } from 'src/app/services/blog-guard.service'; */



const routes: Routes = [
    {
    path:'',
    component:AuthComponent,
    children:[
      {path:'',component:LoginComponent},
      {path:'register',component:RegisterComponent},
      {path:'home',component:HomeComponent},
      {path:'video',component:VideoComponent},
      {
        path: 'posts',
        loadChildren: () => import('../wordpress/wordpress.module').then( m => m.WordpressModule)
      },
      { path:'**',redirectTo:''}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }
