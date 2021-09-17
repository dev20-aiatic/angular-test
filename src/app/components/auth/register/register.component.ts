import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/dashgular/auth.service';
import Swal from 'sweetalert2';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  hide = true;
  submitted: boolean = false;
  loading = false;
  fieldTextType: boolean;

  //Definimos Register form
  registerForm: FormGroup = this.fb.group({
    name: [null, [Validators.required, Validators.minLength(4)]],
    email: [
      null,
      [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ],
    ],
    password: [null, [Validators.required, Validators.minLength(8)]],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {}

  register() {
    this.loading = true;
    const { name, email, password } = this.registerForm.value;
    this.authService.signup(name, email, password).subscribe((res) => {
        Swal.fire('Estimado usuario', res['message'], 'success');
        this.loading = false;
        setTimeout(() => {
          this.router.navigateByUrl('/dashboard');
        });
      },
      (error) => {
        this.notificationService.warn('Error: ' + error.error.message);
        this.loading = false;
      }
    );
  }
}
