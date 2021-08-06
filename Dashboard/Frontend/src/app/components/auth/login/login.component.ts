import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogin: boolean = false
  errorMessage: any

  loginForm: FormGroup;
  hide = true;
  loading=false;

  constructor(private fb: FormBuilder, private _snackbar: MatSnackBar, private _api: ApiService, private _auth: AuthService, private _router: Router) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      pass: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
   console.log('Your form data : ', form.value);
   this.loadingSpinner();
   this._api.postTypeRequest('user/login', form.value).subscribe((res: any) => {

     if (res.status) {
       console.log(res)
       this._auth.setDataInLocalStorage('userData',
      JSON.stringify(res.data));
      
      this._auth.setDataInLocalStorage('token', res.token);
      this._router.navigate(['']);
    } else {

    }
  }, err => {
    this.errorMessage = err['error'].message;
  });
}

isUserLogin(){
  console.log(this._auth.getUserDetails())
  if(this._auth.getUserDetails() != null){
    this.isLogin = true;
  }
}

logout(){
  this._auth.clearStorage()
  this._router.navigate(['']);
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
      this._router.navigate(['dashboard']);
    }, 1500);
  }
}
  


