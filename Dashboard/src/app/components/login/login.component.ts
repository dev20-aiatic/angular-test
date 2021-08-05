import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide = true;
  loading=false;

  constructor(private fb: FormBuilder, private _snackbar: MatSnackBar, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      pass: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  signin(){
    const email= this.loginForm.value.email;
    const pass= this.loginForm.value.pass;

      //Validación temporal al home
    if(email=='jadape@tapi.re' && pass=='1234'){
      this.loadingSpinner();
    }else{
      this.error();
    }
  }

  error(){
    this._snackbar.open('Usuario o contraseña invalidos','',{
      duration:5000,
      horizontalPosition: 'center',
      verticalPosition:'bottom'
    })
  }

  loadingSpinner(){
    this.loading=true;
    setTimeout(() => {
      this.router.navigate(['dashboard']);
    }, 1500);
  }
}
  

