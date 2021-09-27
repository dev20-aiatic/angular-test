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
      this.getPostDetails();
      this.getAllCategories();
  }



 /**
  * Método que me devuelve y setea la información del post
  * @params Id - Variable que almacena el dato recibido del componente 'BlogComponent'
  * @returns - Información de la publicación
  */
 getPostDetails() {
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

  /**
  * Metodo que me devuelve las categorias existentes
  * @returns - Listado de categorias
  */
  getAllCategories() {
    this.blogService.getCategories().subscribe(data =>  {
      this.categories = data;
    });
  }

  //Función encargada de guardar la información del evento
  save() {
      this.dialogRef.close(this.editPost.value);
  }

  //Función encargada de cerrar el dialogo
  close() {
      this.dialogRef.close(false);
  }

}


