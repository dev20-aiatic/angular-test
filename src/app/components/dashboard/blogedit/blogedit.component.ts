import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Posteo } from 'src/app/interfaces/post';
import { BlogService } from 'src/app/services/blog.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-blogedit',
  templateUrl: './blogedit.component.html',
  styleUrls: ['./blogedit.component.css']
})
export class BlogeditComponent implements OnInit {
  postEdit:any;
  @Input() id:number;
  description:string;
  Msg: any;

  constructor(
      private fb: FormBuilder,
      private blogService: BlogService,
      private router: Router,
      private dialogRef: MatDialogRef<BlogeditComponent>,
      @Optional() @Inject(MAT_DIALOG_DATA) public data: Posteo) {}

      editPost: FormGroup = this.fb.group({
        'title': ['', Validators.compose([Validators.required])],
        'excerpt': ['', Validators.compose([Validators.required])],
        'content': ['', Validators.compose([Validators.required])]
    });

  ngOnInit() {
     this.blogService.getPost(id)
      .subscribe((res) => {
        this.postEdit = res;
        console.log(this.postEdit);
      }); 
  }

  save() {
        const val = this.editPost.value;
        const data = {
          title: val.title,
          excerpt:val.excerpt,
          content: val.content,
          status: 'publish'
        };
            this.blogService.updatepost(id, data)
            .subscribe(
              res => {
                Swal.fire( 'Mensaje', 'El post ha sido editado exitosamente', 'success');
                setTimeout(() => this.Msg = "", 2500);
                setTimeout(() => {
                  this.router.navigateByUrl('/web/posts')
                })
              },
              err => {
                this.Msg = err
                setTimeout(() => this.Msg = "", 2500);
              }
            );
            this.dialogRef.close(this.editPost.value);
  }

  close() {
      this.dialogRef.close();
  }
}
function id(id: any, data: { title: any; excerpt: any; content: any; status: string; }) {
  throw new Error('Function not implemented.');
}

