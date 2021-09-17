import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { BlognewComponent } from './blognew.component';
import { BlogGuard } from 'src/app/services/wordpress/blog-guard.service';


const routes: Routes = [
  {
    path: '',
    component: BlognewComponent,
    canActivate: [BlogGuard],
    runGuardsAndResolvers: 'paramsOrQueryParamsChange' // para refrescar
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  declarations: [BlognewComponent],
  providers: [ BlogGuard]
})
export class BlognewModule { }
