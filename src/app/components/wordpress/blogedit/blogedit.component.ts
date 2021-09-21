import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Post, Posteo } from 'src/app/interfaces/post';
import { BlogService } from 'src/app/services/wordpress/blog.service';

@Component({
  selector: 'app-blogedit',
  templateUrl: './blogedit.component.html',
  styleUrls: ['./blogedit.component.css']
})


export class BlogeditComponent implements OnInit {
  categories: any=[];
  editPost:FormGroup;
  id:number;
  Msg: any;

  constructor(
      private fb: FormBuilder,
      private blogService: BlogService,
      @Optional() public dialogRef: MatDialogRef<BlogeditComponent>,
      @Inject(MAT_DIALOG_DATA)  data: Posteo) {
          this.id=data.id;
          this.editPost = this.fb.group({
            id: ['',[Validators.required]],
            date:['',[Validators.required]],
            modified:['',[Validators.required]],
            category:['',[Validators.required]],
            title: ['',[Validators.required]],
            excerpt: ['',[Validators.required]],
            content: ['',[Validators.required]]
        });
      }


  ngOnInit() {
      this.getPostDetais();
      this.getAllCategories();
  }

  showHTML(){
    const htmlContentWithoutStyles = document.getElementById("htmlDiv");
  }

 /**Metodo que me devuelve y setea la información del post**/
 getPostDetais() {
  this.blogService.getPost(this.id)
  .subscribe(data => {
    this.editPost.patchValue({
      id: data.id,
      date:data.date,
      modified:data.modified,
      category: data._embedded['wp:term']['0']['0'].name,
      title:data.title.rendered,
      excerpt:data.excerpt.rendered,
      content:data.content.rendered
      })
  });
}

  /**Metodo que me devuelve las categorias existentes */
  getAllCategories() {
    this.blogService.getCategories().subscribe(data =>  {
      this.categories = data;
    });
  }


  save() {

        //this.editPost.get('content').markAsTouched();
        this.dialogRef.close(this.editPost.value);
  }

  close() {
      this.dialogRef.close(false);
  }

}


