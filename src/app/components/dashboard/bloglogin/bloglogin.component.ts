import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bloglogin',
  templateUrl: './bloglogin.component.html',
  styleUrls: ['./bloglogin.component.css']
})
export class BlogloginComponent implements OnInit {

  hide = true;
  loading = false;
  Msg: string;
  formSubmitted: boolean = false;
  user: any;

  constructor(private fb: FormBuilder, private blogService:BlogService,private router: Router) { }

  wpLoginForm: FormGroup = this.fb.group({
    'username': ['', Validators.compose([Validators.required])],
    'password': ['', Validators.compose([Validators.required])],
});

  ngOnInit() {
    if(!this.blogService.isLoggedIn){
      this.router.navigateByUrl('web/posts');
      return;
    }
  }


  Auth() {
    this.loading = true;
    const {username, password } = this.wpLoginForm.value;

        this.blogService.Login(this.wpLoginForm.value).subscribe(res => {
            this.loading = false;
            this.blogService.setUser(res);
            Swal.fire( 'Mensaje', 'Ha iniciado sesión correctamente', 'success');
            setTimeout(() => this.Msg = "", 2500);
            setTimeout(() => {
              this.router.navigateByUrl('/web/posts')
            })
          },
          err => {
            this.Msg = 'Credenciales invalidas';
            this.loading = false;
            setTimeout(() => this.Msg = "", 2500);
          }
        );

    }
    
  ngOnDestroy() {
    this.wpLoginForm.reset();
  }
}
