import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Componentes que forman el dashboard
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';

// Componentes que son el contenido
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HistoryComponent } from './history/history.component';
import { VideoComponent } from './video/video.component';
import { BlogComponent } from './blog/blog.component';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';
import { BlognewComponent } from './blognew/blognew.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    SidebarComponent,
    HomeComponent,
    VideoComponent,
    HistoryComponent,
    BlogComponent,
    BlogdetailComponent,
    BlognewComponent
  ],
  exports: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MatSidenavModule
  ]
})
export class DashboardModule { }
