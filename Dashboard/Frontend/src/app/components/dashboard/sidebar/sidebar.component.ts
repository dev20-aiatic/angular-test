import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SocialAuthService } from "angularx-social-login";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private SocialAuthService:SocialAuthService , public authService:AuthService) { }

  ngOnInit(): void {
  }
  logout() {
    this.SocialAuthService.signOut();
    localStorage.removeItem('token');
  }
}
