import { BlogdeleteComponent } from './../blogdelete/blogdelete.component';
import { Post } from '../../../interfaces/post';
import { Component, HostListener, OnInit} from '@angular/core';
import { BlogService } from 'src/app/services/wordpress/blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { NotificationService } from 'src/app/services/notification.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { BlogeditComponent } from '../blogedit/blogedit.component';
import { WPAuthService } from 'src/app/services/wordpress/wpauth.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  posts!: Post[];
  userDetails: any;
  postCount = null;
  page = 1;

  
  constructor( public blogService: BlogService,
               private router: Router, 
               private wpAuthService:WPAuthService,
               public dialog: MatDialog, 
               private notificationService: NotificationService, 
               private spinner: NgxSpinnerService) {
  }

  async  ngOnInit() {
    this.getposts();
    }


  /**Metodo que trae los posts */
  async getposts() {
      this.spinner.show();
      this.blogService.getRecentPosts(1).subscribe((data) =>  {
        this.postCount = this.blogService.allPosts;
        this.posts = data;
        this.spinner.hide();
      },
      err => console.error(err),
      );
  }


  /**Función para redirigir al usuario */
redirectTo(uri:string){
  this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
  this.router.navigate([uri]));
}


  /** Llamamos el dialog de editar **/
   openEdit(post): void{

    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id:post.id
    };

    const dialogRef = this.dialog.open(BlogeditComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        console.log(data);
      if (data) {
        this.blogService.updatepost(post.id, data).subscribe(
          res => {
            this.redirectTo('/web/posts');
            this.notificationService.success('Post '+res.title.rendered+' editado exitosamente');
          },
          err => {
            this.notificationService.warn('Error: '+err+' ');
          }
        );
      }
     });
}

 /** Llamamos el dialog encargado para el borrado del post **/
 openDelete(post): void{

  const dialogConfig = new MatDialogConfig();


  dialogConfig.data = {
    title:post.title.rendered
  };

  const dialogRef = this.dialog.open(BlogdeleteComponent, dialogConfig);

  dialogRef.afterClosed().subscribe((
    save:boolean) => {
    if (save) {
      this.blogService.deletepost(post.id)
      .subscribe((res) => {
        this.redirectTo('/web/posts');
        this.notificationService.success('Post '+res.title.rendered+' eliminado exitosamente');
        },
        err => {
          this.notificationService.warn('Error: '+err+' ');
        }
      );
    }
   });
}

/**Metodo que valida el logueo**/
checklogin() {
  return this.wpAuthService.getIsAuth();
}

}




