import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { WPAuthService } from 'src/app/services/wpauth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  sideBarOpen = true;

  constructor(private breakpointObserver: BreakpointObserver, private auth:AuthService, private router: Router, private wpAuthService: WPAuthService) {
    this.initializeApp();
    if(this.Loggedin){
      this.router.navigateByUrl('/dashboard')
    } }

  ngOnInit(): void {
  }

    get userData() {
      return this.auth.userlogged;
    }  

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  get Loggedin(){
    return localStorage.getItem('token')
  }

  initializeApp() {
    this.auth.autoAuthUser();
    this.wpAuthService.autoAuthUser();
  }

}
