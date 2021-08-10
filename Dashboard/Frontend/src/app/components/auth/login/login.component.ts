import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider, SocialUser  } from "angularx-social-login";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  socialUser!: SocialUser;
  isLoggedin!: boolean;  
  
  hide = true;
  loading=false;

  constructor(private fb: FormBuilder, private socialAuthService: SocialAuthService, private authService: AuthService) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });   
    this.socialAuthService.authState.subscribe((user) => {
    this.socialUser = user;
    this.isLoggedin = (user != null);
    console.log(this.socialUser);
  });
}

  login() {
    const val = this.loginForm.value;
    if (val.email && val.password) {
       this.loadingSpinner();
        this.authService.login(val.email, val.password)
            .subscribe(
                () => {
                    console.log("Sesión iniciada");                }
            );
    }
}
loginWithGoogle(): void {
  this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
}

loginWithFB(): void {
  this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
}

refreshToken(): void {
  this.socialAuthService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
}
  loadingSpinner(){
    this.loading=true;
    setTimeout(() => 150);
  }
}
  

