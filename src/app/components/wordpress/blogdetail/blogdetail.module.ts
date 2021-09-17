import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { BlogdetailComponent } from './blogdetail.component';


const routes: Routes = [
  {
    path: '',
    component: BlogdetailComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [BlogdetailComponent],
  providers: []
})
export class BlogdetailModule { }
