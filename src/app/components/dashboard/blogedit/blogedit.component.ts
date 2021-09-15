import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Posteo } from 'src/app/interfaces/post';
import { BlogService } from 'src/app/services/blog.service';
import { NotificationService } from 'src/app/services/notification.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-blogedit',
  templateUrl: './blogedit.component.html',
  styleUrls: ['./blogedit.component.css']
})


export class BlogeditComponent implements OnInit {
  postEdit:any;  //Var de formulario group
  editPost;
  id:number;
  description:string;
  Msg: any;
  htmlContent = ''; //Var para mostrar html

  constructor(
      private fb: FormBuilder,
      private blogService: BlogService,
      private router: Router,
      private notificationService: NotificationService,
      @Optional() public dialogRef: MatDialogRef<BlogeditComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) {
          this.id=data.id;
      }

  ngOnInit() {
      this.blogService.getPost(this.id)
      .subscribe((res) => {
        this.postEdit = res;
      });

      this.editPost = this.fb.group({
        'title': ['', Validators.compose([Validators.required])],
        'excerpt': ['', Validators.compose([Validators.required])],
        'content': ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  showHTML(){
    const htmlContentWithoutStyles = document.getElementById("htmlDiv");
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
  }
  save() {
        this.editPost.get('content').markAsTouched();
        const val = this.editPost.value;
        const data = {
          title: val.title,
          excerpt:val.excerpt,
          content: val.content,
          status: 'publish'
        };
            this.blogService.updatepost(this.id, data)
            .subscribe(
              res => {
                this.notificationService.warn('El post '+ data.title.rendered +' ha sido editado exitosamente');
                Swal.fire( 'Mensaje', 'El post ha sido editado exitosamente', 'success');
                  this.redirectTo('/web/posts');
              },
              err => {
                this.notificationService.warn('Error: '+err);
              }
            );
            this.dialogRef.close(this.editPost.value);
  }

  close() {
      this.dialogRef.close();
  }
  
}


