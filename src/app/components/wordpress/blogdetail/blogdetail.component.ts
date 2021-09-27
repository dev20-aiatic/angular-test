import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Post } from 'src/app/interfaces/post';
import { BlogService } from 'src/app/services/wordpress/blog.service';

@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.css']
})
export class BlogdetailComponent implements OnInit {
  postDetail: any;
  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {}

  async ngOnInit() {
    this.getpost();
    }

    /**Metodo que trae los detalles del post */
  async getpost() {
    const  id = this.route.snapshot.paramMap.get('id');
    this.spinner.show();
    this.blogService.getPost(id).subscribe((res) =>  {
      this.postDetail = res;
      this.spinner.hide();
    },
    err => console.error(err),
    );
}

}
