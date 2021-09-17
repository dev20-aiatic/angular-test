import { BlogdetailModule } from './../wordpress/blogdetail/blogdetail.module';
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
        loadChildren: () => import('../wordpress/blog/blog.module').then( m => m.BlogModule)
      },
      {
        path: 'post/:id',
        loadChildren: () => import('../wordpress/blogdetail/blogdetail.module').then( m => m.BlogdetailModule)
      },
      {
        path: 'newpost',
        loadChildren: () => import('../wordpress/blognew/blognew.module').then( m => m.BlognewModule)
      },
/*       {path:'post/:id',component:BlogdetailComponent},
      {path:'posts',component:BlogComponent,resolve: {
        data: BlogResolver
      },
      runGuardsAndResolvers: 'paramsOrQueryParamsChange'
      },
      {path:'wp-login', component:BlogloginComponent},
      {path:'newpost',component:BlognewComponent, canActivate: [BlogGuard]}, */
      { path:'**',redirectTo:''}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }
