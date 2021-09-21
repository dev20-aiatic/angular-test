import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BlogService } from 'src/app/services/wordpress/blog.service';
import { Blog } from 'src/app/interfaces/Blog';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpEventType } from '@angular/common/http';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-blognew',
  templateUrl: './blognew.component.html',
  styleUrls: ['./blognew.component.css']
})
export class BlognewComponent implements OnInit {
  //Var selector de categorias
  categories: any=[];
  floatLabelControl = new FormControl('auto');

  //Var carga de imagen
  image: string[] = [];

  new_post = {
    title: '',
    excerpt: '',
    content: '',
    status: 'publish',
    }

  loading = false;
  Msg: any;
  formSubmitted: boolean = false;
  isLoggedIn$: Observable<boolean>;

  constructor(private fb: FormBuilder,
     public blogService: BlogService,
     private blog:BlogService,
     private router: Router,
     private route:ActivatedRoute,
     private http: HttpClient) { }

     //Formulario detalles post
  newForm: FormGroup = this.fb.group({
    title: ['', Validators.compose([Validators.required])],
    excerpt: ['', [Validators.required,  Validators.maxLength(80), Validators.minLength(5)]],
    category:['', Validators.compose([Validators.required])],
    content: ['', [Validators.required, Validators.minLength(5)]],
    featured_media: ['']
});
    //Formulario para la carga de imagen
    myForm = new FormGroup({
      name: new FormControl('test', [Validators.required]),
      file: new FormControl('', [Validators.required]),
      fileSource: new FormControl('', [Validators.required])
    });

  ngOnInit() {
    this.getAllCategories();
  }



  /**Metodo que me devuelve las categorias existentes */
  getAllCategories() {
    this.blogService.getCategories().subscribe(data =>  {
      this.categories = data;
      console.log(this.categories);
    });
  }


  createPost() {
    const val = this.newForm.value;
    this.loading = true;

    const data = {
      title: val.title,
      excerpt:val.excerpt,
      content: val.content,
      categories: val.category,
      status: 'publish'
    };
        console.log(data);
        this.blog.createpost(data)
        .subscribe(
          res => {
            this.loading = false;
            this.Msg = res;
            Swal.fire( 'Mensaje', 'El post ha sido creado exitosamente', 'success');
            setTimeout(() => this.Msg = "", 2500);
            setTimeout(() => {
              this.router.navigate(['..'], { relativeTo: this.route });
            })
          },
          err => {
            this.Msg = err
            this.loading = false;
            setTimeout(() => this.Msg = "", 2500);
          }
        );

    }

 /* Carga de img */

 get formValue(){
  return this.myForm.controls;
}


 onFileChange(event:any) {
  if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
              var reader = new FileReader();
              reader.onload = (event:any) => {
                // Push Base64 string
                this.image.push(event.target.result); 
                this.patchValues();
              }
              reader.readAsDataURL(event.target.files[i]);
      }
  }
}

// Patch form Values
patchValues(){
  this.myForm.patchValue({
     fileSource: this.image
  });
}

// Remove Image
removeImage(url:any){
  console.log(this.image,url);
  this.image = this.image.filter(img => (img != url));
  !this.myForm.patchValue;
  this.patchValues();
}
   
// Submit Form Data
/* submit(){
  this.http.post('http://localhost:8005/upload.php', this.myForm.value)
    .subscribe(res => {
      console.log(res);
      alert('Imagen cargada correctamente');
    })
}
 */

submit() {

  const val = this.myForm.value;
    const attachData = {
      title: val.name,
      file:val.fileSource,
      status: 'publish'
    };

        this.blog.uploadImage(attachData)
        .subscribe(
          res => {
            this.Msg = res;
            console.log(res);
            Swal.fire( 'Mensaje', 'La imagen ha sido cargada exitosamente', 'success');
          },
          err => {
            this.Msg = err
            console.log(this.Msg);
            this.loading = false;
            setTimeout(() => this.Msg = "", 2500);
          }
        );
}
}
