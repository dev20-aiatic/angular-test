import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  get Loggedin(){
    return localStorage.getItem('token')
  }

  constructor(private router: Router) { 
    if(this.Loggedin){
      this.router.navigateByUrl('/dashboard')
    }
  }

  ngOnInit() {
  }

}
