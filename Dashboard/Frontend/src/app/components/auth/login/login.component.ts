import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide = true;
  loading=false;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(7),
      ]),
    });
  }

  ngOnInit(): void {
  }

  login(): void{
    this.loadingSpinner();
    this.authService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe();
  }


  loadingSpinner(){
    this.loading=true;
    setTimeout(() => 1500);
  }
}
  

