import { BlogComponent } from './blog/blog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordpressComponent } from './wordpress.component';
import { BlogeditComponent } from './blogedit/blogedit.component';
import { BlogloginComponent } from './bloglogin/bloglogin.component';
import { BlognewComponent } from './blognew/blognew.component';
import { SharedModule } from '../shared/shared.module';
import { LOADING_BAR_CONFIG } from '@ngx-loading-bar/core';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';
import { BlogdeleteComponent } from './blogdelete/blogdelete.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { WordpressRoutingModule } from './wordpress-routing.module';

@NgModule({
  imports: [
    WordpressRoutingModule,
    RouterModule,
    CommonModule,
    SharedModule,
  ],
  declarations: [
    WordpressComponent,
    FooterComponent,
     BlogComponent, 
     BlognewComponent, 
     BlogloginComponent,
     BlogeditComponent, 
     BlogdeleteComponent,
     BlogdetailComponent],
  providers:[
    { provide: LOADING_BAR_CONFIG, useValue: { latencyThreshold: 100 } },
  ],
})
export class WordpressModule { }
