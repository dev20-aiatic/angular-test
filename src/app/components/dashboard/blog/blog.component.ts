import { Component, OnInit} from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { WP_User } from 'src/app/interfaces/WP_User';
import { Observable } from 'rxjs';
import { BlogeditComponent } from '../blogedit/blogedit.component';
import { NotificationService } from 'src/app/services/notification.service';
import { WPAuthService } from 'src/app/services/wpauth.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  Posts: any = null;
  postCount = null;
  postDeleted: any;
  page = 1;
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

  constructor( public blogService: BlogService, private router: Router, public dialog: MatDialog, private notificationService: NotificationService, private wpAuthService:WPAuthService) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
      this.blogService.getAllPosts().subscribe((res) => {
        this.postCount = this.blogService.allPosts;
        this.Posts = res;
      });
    }
  /**Metodo que me devuelve la información del usuario */
    get userData() {
      return this.wpAuthService.user;
  }
  /**Metodo que valida el logueo**/

  checklogin() {
    return this.wpAuthService.getIsAuth();
}

reloadCurrentRoute() {
  let currentUrl = this.router.url;
  this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
  });
}
redirectTo(uri:string){
  this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
  this.router.navigate([uri]));
}

    logout(): void {
      this.wpAuthService.logout();
      this.redirectTo('/web/posts');
    }

  /** Llamamos el dialog de editar **/
   openEdit(id): void{
    let dialogRef  = this.dialog.open(BlogeditComponent, {
      width: '800px',
      height: '400px',
      panelClass: 'my-centered-dialog',
      data:{
        id:id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialogo cerrado');
    });
} 
deletePost(post) {
  if (confirm("¿Realmente desea borrar el post: " + post.title.rendered +" ?" )) {
    this.blogService.deletepost(post.id)
      .subscribe((res) => {
        this.postDeleted = res;
        this.redirectTo('/web/posts');
        this.notificationService.success('Post '+post.title.rendered+' eliminado exitosamente');
        console.log(this.postDeleted);
      });
  }
    
}
 
}




