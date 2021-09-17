import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { WPAuthService } from 'src/app/services/wordpress/wpauth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bloglogin',
  templateUrl: './bloglogin.component.html',
  styleUrls: ['./bloglogin.component.css'],
})
export class BlogloginComponent implements OnInit {
  hide = true;
  wpLoginForm: FormGroup;

  constructor(private fb: FormBuilder, private wpAuthService:WPAuthService, private router:Router) {
    this.wpLoginForm = this.fb.group({
      'username': ['', Validators.compose([Validators.required])],
      'password': ['', Validators.compose([Validators.required])],
  });
   }


  ngOnInit() {
   
  }

  Auth() {
    const { username, password } = this.wpLoginForm.value;
    this.wpAuthService.Login(username, password);
  }

  ngOnDestroy() {
    this.wpLoginForm.reset();
  }
}
