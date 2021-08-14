import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth.service';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider, SocialUser  } from "angularx-social-login";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";

export interface DialogData {
  message: string;
  dialogState: number
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pageTitle = 'Inicio de sesión | Dashgular';
  loading = false;
  hide = true;
  fieldTextType: boolean;
  loginForm: FormGroup;

  Msg: any;

  socialUser!: SocialUser;


  constructor(private title: Title, private fb: FormBuilder, public authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    console.log("")
    this.title.setTitle(this.pageTitle);
    //Inicializamos el formulario de inicio de sesión
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]],
      password: [null, Validators.required],
    });
  }

  //Obtener form controls
  get form() {
    return this.loginForm.controls;
  }

  //Toggle show password
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  login() {
    this.Msg = '';
  
    this.loading = true;

    this.authService.login({email: this.loginForm.value.email, password: this.loginForm.value.password})
      .subscribe(
        (res: HttpResponse<any>) => {
          this.Msg = res['message'];
          this.loading = false;
          setTimeout(() => this.Msg = "", 2500);
          this.authService.setUser(res['user']);
          this.authService.setToken(res['token']);
          localStorage.setItem('authToken', res['token']);
          setTimeout(() => {
            this.router.navigate(['dashboard'])
          })
        },
        (error: HttpErrorResponse) => {
          this.Msg = error.error.message
          this.loading = false;
          setTimeout(() => this.Msg = "", 2500);
        }
      )
  }
}
