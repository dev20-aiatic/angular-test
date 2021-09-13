import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from 'src/app/interfaces/Blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  @Input() blog: Blog;
  // declaramos como any nuestra variable feed
  Posts: any = null;
  postCount = null;
  page = 1;
  next() {
    this.blogService.nextPage(this.page += 1).subscribe(data => {
      console.log(data);
      if (data) {
        this.Posts = data;
      }
    });
  }
  previous() {
    if (this.page > 1) {
      this.blogService.previousPage(this.page -= 1).subscribe(data => {
        console.log(data);
        if (data) {
          this.Posts = data;
        }
      });
    }
  }
  loading = false;

  constructor( private blogService: BlogService) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
      this.blogService.getAllPosts().subscribe((res) => {
        this.postCount = this.blogService.allPosts;
        this.Posts = res;
      });
    }
}

