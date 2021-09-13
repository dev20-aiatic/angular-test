import { LoginComponent } from 'src/app/components/auth/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from 'src/app/components/auth/register/register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
     RegisterComponent, 
     MenuComponent,
    ],
  imports: [
    AuthRoutingModule,
    RouterModule,
    CommonModule,
    SharedModule
  ]
})
export class AuthModule { }
