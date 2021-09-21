import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/wordpress/blog.service';

@Component({
  selector: 'app-blogcategories',
  templateUrl: './blogcategories.component.html',
  styleUrls: ['./blogcategories.component.css']
})
export class BlogcategoriesComponent implements OnInit {
  categories: any=[];

  constructor(public blogService: BlogService,) { }

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

}
