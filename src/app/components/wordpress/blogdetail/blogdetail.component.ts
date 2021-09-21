import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const  id = this.route.snapshot.paramMap.get('id');
      this.blogService.getPost(id)
      .subscribe((res) => {
        this.postDetail = res;
      });
    }
}
