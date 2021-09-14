import { Component, OnInit, Input, Output } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { WP_User } from 'src/app/interfaces/WP_User';
import { Observable } from 'rxjs';
import { BlogeditComponent } from '../blogedit/blogedit.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  @Input() token;

  Posts: any = null;
  postCount = null;
  postDeleted: any;
  id = 528;
  page = 1;
  isLoggedIn$: Observable<boolean>;   
  public user$;


 /*  next() {
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
  } */
  loading = false;

  constructor( public blogService: BlogService, private router: Router, public dialog: MatDialog,private route: ActivatedRoute) {}

  ngOnInit() {
    this.getPosts();
    this.isLoggedIn$ = this.blogService.isLoggedIn;
  }

  getPosts() {
      this.blogService.getAllPosts().subscribe((res) => {
        this.postCount = this.blogService.allPosts;
        this.Posts = res;
      });
    }
  /**Metodo que me devuelve la información del usuario */
    get userData() {
      return this.blogService.getUser;
  }
    logout(): void {
      this.blogService.logout();
      this.router.navigateByUrl('web/posts');
  }

  /* openEdit(): void {
    let dialogRef = this.dialog.open(BlogeditComponent, {
      width: '800px',
      height: '400px',
      panelClass: 'my-centered-dialog',
      data:{id:this.id}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
     */
   openEdit() {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data={id:528}
    this.dialog.open(BlogeditComponent, dialogConfig);

    const dialogRef =   this.dialog.open(BlogeditComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(() => {
      data => console.log('Dialog output', data);
    })
} 

deletePost(id:number) {
  if (confirm("¿Realmente desea borrar el post?")) {
    this.blogService.deletepost(id)
      .subscribe((res) => {
        this.postDeleted = res;
        console.log(this.postDeleted);
      });
  }
    
}
 
}




