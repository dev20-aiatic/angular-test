import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Post } from 'src/app/interfaces/post';
import { BlogService } from 'src/app/services/wordpress/blog.service';

@Component({
  selector: 'app-blogdelete',
  templateUrl: './blogdelete.component.html',
  styleUrls: ['./blogdelete.component.css']
})
export class BlogdeleteComponent implements OnInit {
  id: number;
  deletePost:string;
  constructor(private blogService: BlogService, public dialogo: MatDialogRef<BlogdeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
        this.deletePost = data.title;
    }
    ngOnInit() {
    }

    save(): void {
      this.dialogo.close(true);
    }

    close(): void {
      this.dialogo.close(false);
    }

}
