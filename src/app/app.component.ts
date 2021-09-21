import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { AuthService } from './services/dashgular/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dashgular';
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(
    public auth: AuthService,
    private socialAuthService: SocialAuthService,
    private route: Router,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  /**Metodo que  devuelve la información del usuario */
  getuserData() {
    this.auth.getInfo;
    console.log(this.auth.getInfo)
  }

  /**Metodo que valida login usuario */
  checklogin() {
    return this.auth.getIsAuth()
  }

  logout(): void {
    this.auth.logout();
    this.socialAuthService.signOut();
  }
}
