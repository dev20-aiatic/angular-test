import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;
  submitted: boolean = false;
  loading = false;
  fieldTextType: boolean;
  Msg: any;


  //Definimos Register form
  registerForm: FormGroup = this.fb.group({
    name: [null, [Validators.required, Validators.minLength(4)]],
    email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    password: [null, [Validators.required, Validators.minLength(8),]]
  })



  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router,) {
  }

  ngOnInit() {
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
            Swal.fire('Estimado usuario', this.Msg, 'success');
            this.loading = false;
            this.authService.setUser(res['user']);
             this.authService.setToken(res['token']);
            localStorage.setItem('authToken', res['token']);
            setTimeout(() => this.Msg = "", 2500);
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
