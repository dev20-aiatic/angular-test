import { BlogdetailComponent } from './blogdetail/blogdetail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { VideoComponent } from './video/video.component';
import { BlogComponent } from './blog/blog.component';
import { BlognewComponent } from './blognew/blognew.component';
  

const routes: Routes = [
  { path: '', component: DashboardComponent,
  children: [
    { path: '', component: HomeComponent},
    { path: 'profile', component: ProfileComponent },
    { path: 'history', component: HistoryComponent },
    { path: 'video', component: VideoComponent },
    {path:'post/:id',component:BlogdetailComponent},
    {path:'posts',component:BlogComponent},
    {path:'newpost',component:BlognewComponent},
    {path: ':user_Id', component: DashboardComponent},
    { path:'**', redirectTo:'' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
