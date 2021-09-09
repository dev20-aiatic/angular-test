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
  user: SocialUser;

  //Definimos el formulario del Login
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })



  constructor(private title: Title, private fb: FormBuilder, public authService: AuthService, private socialAuthService: SocialAuthService, private router: Router) {
  }

  ngOnInit(): void {
      //Asignamos nombre a la vista de login
    this.title.setTitle(this.pageTitle);
    
    //Definimos observable para verifcar sesión iniciada de Google o Facebook
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.isLoggedin = (user != null);
      console.log(this.user);
    });
    
  }

  /**Funcion que trae el modal de login con google */
  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.socialAuthService.authState.subscribe((user) =>{
      this.authService.loginSocial({name:user.firstName, lastname:user.lastName, email:user.email, photo:user.photoUrl}).subscribe((res)=>{
        if(res['success']){
          this.user = user;
          this.isLoggedin = true;
          this.router.navigateByUrl('/dashboard')
        }else{
          console.log('No se logueó correctamente')
        }
      })
        
      })
  }
  
  /**Funcion que trae el modal de login con Facebook */
  loginWithFacebook(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.socialAuthService.authState.subscribe((user) =>{
      this.authService.loginSocial({name:user.firstName, lastname:user.lastName, email:user.email, photo:user.photoUrl}).subscribe((res)=>{
        if(res['success']){
          this.user = user;
          this.isLoggedin = true;
          this.router.navigateByUrl('/dashboard')
        }else{
          console.log('No se logueó correctamente')
        }
      })   
   })
  }

  //Toggle show password
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  login() {
    this.Msg = '';
  
    this.loading = true;

    const { email, password } = this.loginForm.value;


    this.authService.login(email, password)
      .subscribe(
        res => {
          this.loading = false;
          this.Msg = res.message;
          Swal.fire( 'Mensaje', this.Msg, 'success');
          setTimeout(() => this.Msg = "", 2500);
          setTimeout(() => {
            this.router.navigateByUrl('/dashboard')
          })
        },
        err => {
          this.Msg = err.error.message
          this.loading = false;
          setTimeout(() => this.Msg = "", 2500);
        }
      );
  }

}
