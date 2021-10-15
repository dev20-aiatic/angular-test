import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/dashgular/auth.service';
import { SocialAuthService } from 'angularx-social-login';
import {FacebookLoginProvider,GoogleLoginProvider,SocialUser} from 'angularx-social-login';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  pageTitle = 'Inicio de sesión | Dashgular';
  loading = false;
  hide = true;
  fieldTextType: boolean;

  //Variables social login
  isLoggedin: boolean;
  user: SocialUser;

  //Definimos el formulario del Login
  loginForm: FormGroup = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ],
    ],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  constructor(private title: Title, private fb: FormBuilder, public authService: AuthService,private socialAuthService: SocialAuthService,private router: Router, private notificationService: NotificationService) {}

  ngOnInit(): void {
    //Asignamos nombre a la vista de login
    this.title.setTitle(this.pageTitle);

    //Definimos observable para verifcar sesión iniciada de Google o Facebook
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.isLoggedin = user != null;
      console.log(this.user);
    });
  }

  /**Método que trae el modal de login con google */
  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.socialAuthService.authState.subscribe((user) => {
      this.authService
        .loginSocial({
          name: user.firstName,
          lastname: user.lastName,
          email: user.email,
          photo: user.photoUrl,
        })
        .subscribe((res) => {
          if (res['success']) {
            this.user = user;
            this.isLoggedin = true;
            this.router.navigateByUrl('/dashboard');
          } else {
            console.log('No se logueó correctamente');
          }
        });
    });
  }

  /**Método que trae el modal de login con Facebook */
  loginWithFacebook(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.socialAuthService.authState.subscribe((user) => {
      this.authService
        .loginSocial({
          name: user.firstName,
          lastname: user.lastName,
          email: user.email,
          photo: user.photoUrl,
        })
        .subscribe((res) => {
          if (res['success']) {
            this.user = user;
            this.isLoggedin = true;
            this.router.navigateByUrl('/dashboard');
          } else {
            console.log('No se logueó correctamente');
          }
        });
    });
  }

  //Toggle show password
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  /**Método encargado del login */
  login() {
    this.loading = true;
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).subscribe((res) => {
        Swal.fire('Estimado usuario', res['message'], 'success');
        this.loading = false;
        setTimeout(() => {
          this.router.navigateByUrl('/dashboard');
        });
      },
      (error) => {
        this.notificationService.warn('  Error: ' + error.error.message);
        this.loading = false;
      }
    );
  }
}
