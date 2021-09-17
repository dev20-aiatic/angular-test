import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/wordpress/blog.service';

@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.css']
})
export class BlogdetailComponent implements OnInit {
  postDetail: any;
  comments: any;
  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
  ) {}

 async ngOnInit() {
    const  id = this.route.snapshot.paramMap.get('id');
      this.blogService.getPost(id)
      .subscribe((res) => {
        this.postDetail = res;
        console.log(this.postDetail);
      });

      this.blogService.getComments(id)
      .subscribe((res) => {
        this.comments = res;
        console.log(this.comments);
      });
    }
}