import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';


const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    runGuardsAndResolvers: 'paramsOrQueryParamsChange' // para refrescar
  },
  
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BlogComponent],
  providers: []
})
export class BlogModule { }
