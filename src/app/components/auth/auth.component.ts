import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WPAuthService } from 'src/app/services/wpauth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  get Loggedin(){
    return localStorage.getItem('token')
  }

  constructor(private router: Router, private wpAuthService: WPAuthService) {
    this.initializeApp(); 
    if(this.Loggedin){
      this.router.navigateByUrl('/dashboard')
    }
  }

  ngOnInit() {
  }

  initializeApp() {
    this.wpAuthService.autoAuthUser();
  }
}
