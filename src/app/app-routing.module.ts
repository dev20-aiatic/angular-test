import { LoginComponent } from 'src/app/components/auth/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';


const routes: Routes = [
  { path: 'web',
   loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)},
  { path: 'dashboard',
   loadChildren: () => import('./components/dashboard/dashboard.module').then(x => x.DashboardModule), canActivateChild:[AuthGuard]},
  { path: '**', redirectTo: 'web'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
