import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogloginComponent } from './bloglogin.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: BlogloginComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  declarations: [BlogloginComponent],
})
export class BlogModule { }
