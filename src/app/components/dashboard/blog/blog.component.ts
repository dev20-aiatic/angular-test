import { Component, OnInit, Input} from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import {Blog} from 'src/app/interfaces/Blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @Input() blog: Blog;
// declaramos como any nuestra variable feed
  feed: any;
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.getPosts();
  }

  private getPosts() {
    this.blogService.getAll(100)
    .subscribe( data => {
      this.feed = data;
    });
  }
}
