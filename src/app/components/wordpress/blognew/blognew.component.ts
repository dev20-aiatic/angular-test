import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogService } from 'src/app/services/wordpress/blog.service';
import { Blog } from 'src/app/interfaces/Blog';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blognew',
  templateUrl: './blognew.component.html',
  styleUrls: ['./blognew.component.css']
})
export class BlognewComponent implements OnInit {

  new_post = {
    title: '',
    excerpt: '',
    content: '',
    status: 'publish'
    }

  loading = false;
  Msg: any;
  formSubmitted: boolean = false;
  isLoggedIn$: Observable<boolean>;   

  constructor(private fb: FormBuilder, public blogService: BlogService, private blog:BlogService,private router: Router) { }

  newForm: FormGroup = this.fb.group({
    'title': ['', Validators.compose([Validators.required])],
    'excerpt': ['', [Validators.required,  Validators.maxLength(80), Validators.minLength(5)]],
    'content': ['', [Validators.required, Validators.minLength(5)]]
});
  ngOnInit() {
  }


  createPost() {
    const val = this.newForm.value;
    this.loading = true;

    const data = {
      title: val.title,
      excerpt:val.excerpt,
      content: val.content,
      status: 'publish'
    };

        this.blog.createpost(data)
        .subscribe(
          res => {
            this.loading = false;
            this.Msg = res;
            Swal.fire( 'Mensaje', 'El post ha sido creado exitosamente', 'success');
            setTimeout(() => this.Msg = "", 2500);
            setTimeout(() => {
              this.router.navigateByUrl('/web/posts')
            })
          },
          err => {
            this.Msg = err
            this.loading = false;
            setTimeout(() => this.Msg = "", 2500);
          }
        );

    }
}

