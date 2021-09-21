import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WordpressComponent } from './wordpress.component';
import { BlogloginComponent } from './bloglogin/bloglogin.component';
import { BlogGuard } from 'src/app/services/wordpress/blog-guard.service';
import { BlognewComponent } from './blognew/blognew.component';
import { BlogComponent } from './blog/blog.component';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';
import { BlogeditComponent } from './blogedit/blogedit.component';

const routes: Routes = [
  {
    path: '',
    component: WordpressComponent,
    children: [
      { path: '', component: BlogComponent},
      { path: 'view/:id', component: BlogdetailComponent },
      { path: 'newpost', component: BlognewComponent, canActivate: [BlogGuard]},
      { path: 'editpost', component: BlogeditComponent, canActivate: [BlogGuard]},
      { path: 'wp-login', component: BlogloginComponent},

      /*       {path:'post/:id',component:BlogdetailComponent},
      {path:'posts',component:BlogComponent,resolve: {
        data: BlogResolver
      },
      runGuardsAndResolvers: 'paramsOrQueryParamsChange'
      },
      {path:'wp-login', component:BlogloginComponent},
      {path:'newpost',component:BlognewComponent, canActivate: [BlogGuard]}, */
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WordpressRoutingModule {}
