import { Posteo } from '../../../interfaces/post';
import { Component, OnInit} from '@angular/core';
import { BlogService } from 'src/app/services/wordpress/blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { Observable } from 'rxjs';
//import { BlogeditComponent } from '../blogedit/blogedit.component';
import { NotificationService } from 'src/app/services/notification.service';
import { WPAuthService } from 'src/app/services/wordpress/wpauth.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  posts: any[];
  categoryId : any[];
  categoryTitle  : any[];

  postCount = null;
  postDeleted: any;
  postEdit: any;
  page = 1;


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

  constructor( public blogService: BlogService, private router: Router, private route: ActivatedRoute, public dialog: MatDialog, private notificationService: NotificationService, private wpAuthService:WPAuthService) {}

  ngOnInit() {
    this.blogService.getRecentPosts(2).subscribe((res) => {
      this.postCount = this.blogService.allPosts;
      this.posts = res;
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
/*   openEdit(post): void{
    let dialogRef  = this.dialog.open(BlogeditComponent, {
      width: '800px',
      height: '400px',
      panelClass: 'my-centered-dialog',
      data:{
        id:post.id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.blogService.updatepost(post.id, result)
      this.postEdit = result;
      this.notificationService.success('Post '+post.title.rendered+' editado exitosamente');
      console.log(this.postEdit);
      console.log('Dialogo cerrado');
    });
}

 */
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




