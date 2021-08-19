import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import { SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public auth: AuthService, private socialAuthService: SocialAuthService, private route: Router) { }

  ngOnInit(): void {
  }
  logout() {
    this.auth.logout();
    this.socialAuthService.signOut();
    this.route.navigateByUrl('/login')
  }
}
