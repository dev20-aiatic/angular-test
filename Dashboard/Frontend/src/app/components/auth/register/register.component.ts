import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {SocialUser} from "angularx-social-login";
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  socialUser!: SocialUser;
  hide = true;
  submitted: boolean = false;
  loading = false;
  fieldTextType: boolean;
  Msg: any;


  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router,) {
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(5)]],
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: [null, [Validators.required, Validators.minLength(8),]],
      confirmPassword: [null, [Validators.required, Validators.minLength(8),]]
    });
  }

  //get form controls
  get form() {
    return this.registerForm.controls;
  }

  register() {
    this.loading = true;
      this.authService
        .signup({
          name: this.registerForm.value.name,
          email: this.registerForm.value.email,
          password: this.registerForm.value.password,
        })
        .subscribe(
          (res: HttpResponse<any>) => {
            this.Msg = res['message'];
            this.loading = false;
            setTimeout(() => this.Msg = "", 2500);
            setTimeout(() => {
              this.router.navigate(['login'])
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
