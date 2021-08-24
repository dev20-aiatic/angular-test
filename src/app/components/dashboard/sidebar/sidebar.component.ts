import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {AuthService} from "../../../services/auth.service";
import { SocialAuthService } from 'angularx-social-login';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})



export class SidebarComponent implements OnInit{
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(public auth: AuthService, private socialAuthService: SocialAuthService, private route: Router,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
   }

  
  ngOnInit(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


  logout() {
    if(localStorage){
      this.auth.logout();
      this.route.navigateByUrl('/login')
    }else{
      this.socialAuthService.signOut();
      this.route.navigateByUrl('/login')
    }
  }
}
