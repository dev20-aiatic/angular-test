import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { AuthService } from 'src/app/services/dashgular/auth.service';
import { SocialAuthService } from 'angularx-social-login';
import { Router } from '@angular/router';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})



export class MenuComponent implements OnInit{
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

}
