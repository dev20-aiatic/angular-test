import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth.service';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider, SocialUser  } from "angularx-social-login";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import Swal from 'sweetalert2';

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
  Msg: any;

  //Variables social login
  isLoggedin: boolean;  
  socialUser: SocialUser;

  //Definimos login form
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })



  constructor(private title: Title, private fb: FormBuilder, public authService: AuthService, private socialAuthService: SocialAuthService, private router: Router) {
  }

  ngOnInit(): void {
    console.log("")
    this.title.setTitle(this.pageTitle);
    

    //Inicializamos login de Google o Facebook
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = (user != null);
      console.log(this.socialUser);
    });
    
  }

  /**Funcion que trae el modal de login con google */
  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  
  /**Funcion que trae el modal de login con Facebook */
  loginWithFacebook(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
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
          Swal.fire( 'Mensaje', this.Msg, 'success');
          this.loading = false;
          setTimeout(() => this.Msg = "", 2500);
          this.authService.setUser(res['user']);
          this.authService.setToken(res['token']);
          localStorage.setItem('authToken', res['token']);
          setTimeout(() => {
            this.router.navigateByUrl('/dashboard')
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
