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
import { HistoryComponent } from './history/history.component';
import { VideoComponent } from './video/video.component';
import { LOADING_BAR_CONFIG } from '@ngx-loading-bar/core';

@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    SidebarComponent,
    HomeComponent,
    VideoComponent,
    HistoryComponent
  ],
  exports: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
  ],
  providers:[
    { provide: LOADING_BAR_CONFIG, useValue: { latencyThreshold: 100 } },
  ],
})
export class DashboardModule { }
