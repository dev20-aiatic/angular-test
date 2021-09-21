import { UserDetails } from './../../../interfaces/Auth';
import { BlogdeleteComponent } from './../blogdelete/blogdelete.component';
import { Post, Posteo } from '../../../interfaces/post';
import { Component, HostListener, OnInit} from '@angular/core';
import { BlogService } from 'src/app/services/wordpress/blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { forkJoin, Observable } from 'rxjs';
//import { BlogeditComponent } from '../blogedit/blogedit.component';
import { NotificationService } from 'src/app/services/notification.service';
import { WPAuthService } from 'src/app/services/wordpress/wpauth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { concatMap, map } from 'rxjs/operators';
import { BlogeditComponent } from '../blogedit/blogedit.component';
import { Wp_Category } from 'src/app/interfaces/WP_Category';
import { FormControl } from '@angular/forms';

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
  throttle = 300;
  scrollDistance = 0.2;
  limit = 20;






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
  private finishPage = 5;
  private actualPage: number;
  public showGoUpButton: boolean;

  
  constructor( public blogService: BlogService, private router: Router, private route: ActivatedRoute, public dialog: MatDialog, private notificationService: NotificationService, private spinner: NgxSpinnerService) {
    this.actualPage = 1;
    this.showGoUpButton = false;
  }

  async  ngOnInit() {
    this.getposts();
    this.getuserData();
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

   /**Metodo que me devuelve la información del usuario */
loadData(e) {
    this.page++;

    this.blogService.getRecentPosts(this.page)
      .subscribe((data) => {
      this.posts = [...this.posts, ...data];
      e.target.complete();
      if (this.page == this.blogService.pages) {
        e.target.disabled = true;
      }
    });
  }

/**Metodo que me devuelve la información del usuario */
getuserData() {
  this.blogService.getUserLogged().subscribe(data =>  {
    this.userDetails = data;
    console.log(this.userDetails);
  });
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
            this.notificationService.success('Post '+res.title.reSndered+' editado exitosamente');
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

}




