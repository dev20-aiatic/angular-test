Implementación de Wordpress en Angular
======================================

Primer Paso
-----------

Se procede a verificar el funcionamiento de la versión 2 de WordPress
Rest Api, para ello prueba haciendo una llamada HTTP a tu sitio
WordPress, para ello ingresa la siguiente URL:
http://tusitiowordpres.com/wp-json/wp/v2/posts que devolverá un JSON
como este: Respuesta Wordpress Rest API

Segundo Paso
------------

Despúes de comprobar el funcionamiento del punto final en la ruta del
sitio, se procede a instalar el siguiente plugin en nuestro sitio
WordPress para la autenticación JWT que permitirá la Creación,
Modificación y Eliminación de Posts del blog. `Plugin WordPress
Autenticación <https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/>`__

Tercer Paso
-----------

Se procede a crear nuestros servicios, interfaces y componentes en el
Front (Angular) para efectuar las diferentes llamadas a la rest API.

Interface: Post
~~~~~~~~~~~~~~~

Este tipo se implementa para definir de manera apropiada la estructura
de datos de los posts recibidos.

.. code:: typescript

   export interface Post {
           id:                      number;
           date:                    Date;
           date_gmt:                Date;
           guid:                    GUID;
           modified:                Date;
           modified_gmt:            Date;
           slug:                    string;
           status:                  string;
           type:                    string;
           link:                    string;
           title:                   GUID;
           content:                 Content;
           excerpt:                 Content;
           author:                  Author;
           featured_media:          number;
           comment_status:          string;
           ping_status:             string;
           sticky:                  boolean;
           template:                string;
           format:                  string;
           categories:              number[];
           tags:                    number[];
           _links:                  Links;
           _embedded:               Embedded;
       }
       

     export interface Links {
           author:             Author[];
           replies:            Author[];
           "version-history":  About[];
           "wp:featuredmedia": Author[];
           "wp:attachment":    About[];
           "wp:term":          WpTerm[];
           curies:             Cury[];
     }

     export interface Embedded {
           author:             AuthorDetails[];
           "wp:featuredmedia": Featuredmedia[];
           "wp:term":          WpTerm[];
     }
       

     export interface AuthorDetails {
           embeddable: boolean;
           id:          number;
           name:        string;
           description: string;
           avatar_urls:  Avatar;
           link:       string;
     }

     export interface Featuredmedia {
           source_url: string;
     }

     export interface Avatar {
           24: string;
           48: string;
           96: string;
     }
       

     export interface Author {
           embeddable: boolean;
           href:       string;
     }
       

       
     export interface WpTerm {
           id:   string;
           name: boolean;
           taxonomy: string; 
           _links: Wp_Category      
     }

         
     export interface Content {
           rendered:  string;
           protected: boolean;
     }
       
     export interface GUID {
           rendered: string;
     }

Interface: WP_Category
~~~~~~~~~~~~~~~~~~~~~~

Este tipo se implementa para definir de manera apropiada la estructura
de datos de las categorias recibidas.

.. code:: typescript

   export interface Wp_Category {
     id: number;
     count: number;
     description?: string;
     link: string;
     name: string;
     slug: string;
     taxonomy:        string;
     parent:          number;
     meta:            any[];
     _links:          Links;
   }

   export interface Links {
     self: About[];
     collection: About[];
     about: About[];
     'wp:post_type': About[];
     curies: Cury[];
   }

   export interface About {
     href: string;
   }

   export interface Cury {
     name: string;
     href: string;
     templated: boolean;
   }

   export interface YoastHeadJSON {
     title: string;
     robots: Robots;
     canonical: string;
     og_locale: string;
     og_type: string;
     og_title: string;
     og_description: string;
     og_url: string;
     og_site_name: string;
     twitter_card: string;
     schema: Schema;
   }

   export interface Robots {
     index: string;
     follow: string;
     'max-snippet': string;
     'max-image-preview': string;
     'max-video-preview': string;
   }

   export interface Schema {
     '@context': string;
     '@graph': Graph[];
   }

   export interface Graph {
     '@type': string;
     '@id': string;
     name?: string;
     url?: string;
     sameAs?: any[];
     logo?: Logo;
     image?: Breadcrumb;
     description?: string;
     publisher?: Breadcrumb;
     potentialAction?: PotentialAction[];
     inLanguage?: string;
     isPartOf?: Breadcrumb;
     breadcrumb?: Breadcrumb;
     itemListElement?: ItemListElement[];
   }

   export interface Breadcrumb {
     '@id': string;
   }

   export interface ItemListElement {
     '@type': string;
     position: number;
     name: string;
     item?: string;
   }

   export interface Logo {
     '@type': string;
     '@id': string;
     inLanguage: string;
     url: string;
     contentUrl: string;
     width: number;
     height: number;
     caption: string;
   }

   export interface PotentialAction {
     '@type': string;
     target: string[] | TargetClass;
     'query-input'?: string;
   }

   export interface TargetClass {
     '@type': string;
     urlTemplate: string;
   }

Modificación en el .env del proyecto
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Se define en el environment los puntos finales a usar (Recomendado)
   sino se puede hacer directamente en el servicio

.. code:: typescript

   export const environment = {
     production: false,
     WP_REST: {
       API: 'https://tudominio.com/wp-json/wp/v2/',
       AUTH: 'https://tudominio.com/wp-json/jwt-auth/v1/token'
     }
   };

Servicio - Post
~~~~~~~~~~~~~~~

Este servicio se encargará de efectuar las peticiones a la Rest API
relacionadas con las publicaciones del blog

-  Se realiza la creación del servicio para la Rest Api de WordPress con
   el siguiente comando:

``ng generate service services/blog``

-  Se procede a efectuar la importación de las diferentes dependencias y
   tipos requeridos en el servicio tal como se aprecia a continuación.
   Así mismo, se define las variables y endpoints de la API previamente
   definidos en el environment.

.. code:: typescript

   import { Injectable } from '@angular/core';
   import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
   import { Observable, of, throwError } from 'rxjs';
   import { catchError, map} from 'rxjs/operators';
   import { Wp_Category } from '../../interfaces/WP_Category';
   import { Post} from 'src/app/interfaces/post';

   @Injectable({
     providedIn: 'root',
   })

   export class BlogService {
   // Endpoint de WordPress Rest API
     WP_API: string = environment.WP_REST.API;
   //Parametros para la consulta de los posts
     allPosts = null;
     pages: any;

     constructor(private http: HttpClient) { }

   } 

Procedimiento: Error de respuesta
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

-  Este procedimiento es el encargado de gestionar las respuestas de
   error obtenidas de la API, este recibe como parametro el error de la
   depedencia HttpErrorResponse

.. code:: typescript

   handleError(error: HttpErrorResponse) {
       let errorMessage = 'Hubo un problema, intente nuevamente';
       if (error.error instanceof ErrorEvent) {
         // Errores del lado del cliente
         errorMessage = `Error: ${error.error.message}`;
       } else {
         // Errores del lado de la api
         errorMessage = `Código de error: ${error.status}\n Mensaje: ${error.message}`;
       }
       return throwError(errorMessage);
     }

Método: Listar publicaciones
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

-  Se define este método que será el encargado de traer todas las
   publicaciones del blog de acuerdo al parámetro de número de
   publicaciones por página, el número de página y ordenando los post
   por su modificación.

.. code:: typescript

   getRecentPosts(page = 1): Observable<Post[]> {
       let options = {
         observe: 'response' as 'body',
         params: {
           per_page: '10',
           page: '' + page,
           orderby: 'modified',
         },
       };

       return this.http
         .get<any[]>(`${this.WP_API}posts?_embed=true`, options)
         .pipe(
           map((res) => {
             this.pages = res['headers'].get('x-wp-totalpages');
             this.allPosts = res['headers'].get('x-wp-total');
             return res['body'];
           }),
           catchError(this.handleError)
         );

Método: Detalles publicación
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

-  Este método se encargará de traer la información detallada de una
   publicación especifica, para ello recibe como parámetro el id del
   post para realizar la correspondiente llamada al punto final.

.. code:: typescript

   getPost(id: any) : Observable<Post> {
       return this.http.get<Post>(`${this.WP_API}posts/${id}?_embed`).pipe(
         map((post) => {
           return post;
         })
       );
     }

Método: Crear nueva publicación
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

-  Se define este método para la creación de nuevas publicaciones, este
   recibe como parametro un array con la información requerida para la
   creación de un nuevo post. Adicionalmente se define un encabezado en
   el que se agregará los detalles de autenticación requeridos para
   efectuar exitosamente la petición.

.. code:: typescript

    createpost(data: any): Observable<Post[]> {
       let options = {
         headers: {
           Authorization: 'Bearer ' + localStorage.getItem('wp-token'),
         },
       };
       return this.http
         .post<Post[]>(`${this.WP_API}posts`, data, options)
         .pipe(catchError(this.handleError));
     }

Método: Modificar publicación
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

-  Este método es el encargado de modificar las publicaciones del blog,
   este recibe como parametro el id del post y un array (data) con la
   información requerida para la modificación del mismo. Adicionalmente
   se define un encabezado en el que se agregará los detalles de
   autenticación requeridos para efectuar exitosamente la petición.

.. code:: typescript

    updatepost(id: any, data: any): Observable<Post> {
       let options = {
         headers: {
           Authorization: 'Bearer ' + localStorage.getItem('wp-token'),
         },
       };
       return this.http
         .post<Post>(`${this.WP_API}posts/${id}`, data, options)
         .pipe(catchError(this.handleError));
     }

Método: Eliminar publicación
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

-  Este se encarga de efectuar la eliminación de una publiación, este
   recibe como parametro el id del post y un array (data) con la
   información requerida para la modificación del mismo. Adicionalmente
   se define un encabezado en el que se agregará los detalles de
   autenticación requeridos para efectuar exitosamente la petición.

.. code:: typescript

    deletepost(id: any): Observable<any> {
       let options = {
         headers: {
           Authorization: 'Bearer ' + localStorage.getItem('wp-token'),
         },
       };
       return this.http
         .delete(`${this.WP_API}posts/${id}`, options)
         .pipe(catchError(this.handleError));
     }

Método: Listar Categorias
^^^^^^^^^^^^^^^^^^^^^^^^^

-  Se define el método que se encarga de obtener el listado de todas las
   categorias existentes en el blog.
-  

.. code:: typescript

   getCategories() {
       return this.http.get(`${this.WP_API}categories`);
     }

Al añadir cada uno de los métodos mencionados y el procedimiento
encargado de manipular los errores de la API el código del servicio
tendrá el siguiente aspecto:

Código Fuente completo del Servicio: Post
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code:: typescript

   import { environment } from 'src/environments/environment';
   import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
   import { Injectable } from '@angular/core';
   import { Observable, of, throwError } from 'rxjs';
   import { catchError, map} from 'rxjs/operators';
   import { WP_User } from '../../interfaces/WP_User';
   import { Wp_Category } from '../../interfaces/WP_Category';
   import { Post} from 'src/app/interfaces/post';

   @Injectable({
     providedIn: 'root',
   })
   export class BlogService {
     // URL del blog que vamos a trabajar con su REST API
     WP_API: string = environment.WP_REST.API;
     //Opciones de blog
     allPosts = null;
     pages: any;

     constructor(private http: HttpClient) {}

      /**
      * procedimiento encargado de administrar las respuestas de error de wp-rest-api
      * @params error - Respuesta de error obtenida de la petición mediante dependecia HTTP
      * @returns Mensaje de error obtenido
      */

     handleError(error: HttpErrorResponse) {
       let errorMessage = 'Hubo un problema, intente nuevamente';
       if (error.error instanceof ErrorEvent) {
         // Errores del lado del cliente
         errorMessage = `Error: ${error.error.message}`;
       } else {
         // Errores del lado de la api
         errorMessage = `Código de error: ${error.status}\n Mensaje: ${error.message}`;
       }
       return throwError(errorMessage);
     }

     /**
      * Método encargado de obtener el listado de los posts publicados en el blog
      * @params page - Número de la página a consultar
      * @returns Respuesta de petición de la api
      */
     getRecentPosts(page = 1): Observable<Post[]> {
       let options = {
         observe: 'response' as 'body',
         params: {
           per_page: '10',
           page: '' + page,
           orderby: 'modified',
         },
       };

       return this.http
         .get<Post[]>(`${this.WP_API}posts?_embed=true`, options)
         .pipe(
           map((res) => {
             this.pages = res['headers'].get('x-wp-totalpages');
             this.allPosts = res['headers'].get('x-wp-total');
             return res['body'];
           }),
           catchError(this.handleError)
         );
     }

     /**
      * Método encargado de obtener detalles de un post especifico
      * @params id - ID del post a consultar
      * @returns Respuesta de petición de la api
      */
     getPost(id: any) : Observable<Post> {
       return this.http.get<Post>(`${this.WP_API}posts/${id}?_embed`).pipe(
         map((post) => {
           return post;
         })
       );
     }

     getCategories() {
       return this.http.get(`${this.WP_API}categories`);
     }


     /**
      * Método encargado de crear un nuevo post
      * @params data - Array con la información ingresada por el usuario en el modal 
      * @returns Respuesta de petición de la api
      */
     createpost(data: any): Observable<Post[]> {
       let options = {
         headers: {
           Authorization: 'Bearer ' + localStorage.getItem('wp-token'),
         },
       };
       return this.http
         .post<Post[]>(`${this.WP_API}posts`, data, options)
         .pipe(catchError(this.handleError));
     }


     /**
      * Método encargado de actualizar un post
      * @params id - Número de identificación del posts
      * @params data - Array con los datos a modificar del post existente
      * @returns Respuesta de petición de la api
      */

     updatepost(id: any, data: any): Observable<Post> {
       let options = {
         headers: {
           Authorization: 'Bearer ' + localStorage.getItem('wp-token'),
         },
       };
       return this.http
         .post<Post>(`${this.WP_API}posts/${id}`, data, options)
         .pipe(catchError(this.handleError));
     }

     /**
      * Método encargado de eliminar un post
      * @params Id - Número de identificación del post a eliminar
      * @returns Respuesta de petición de la api
      */

     deletepost(id: any): Observable<any> {
       let options = {
         headers: {
           Authorization: 'Bearer ' + localStorage.getItem('wp-token'),
         },
       };
       return this.http
         .delete(`${this.WP_API}posts/${id}`, options)
         .pipe(catchError(this.handleError));
     }

Componente - Blog
~~~~~~~~~~~~~~~~~

Este componente tiene como función mostrar el listado de los
publicaciones obtenidas por el método previamente definido en el
servicio, así mismo, permitir la creación, eliminación y modificación de
publicaciones acorde a cada uno de los alcances de los métodos creados
para dicho fin.

-  Se realiza la creación del componente ‘Blog’ con el siguiente
   comando:

``ng generate component components/wordpress/blog``

-  Se procede a efectuar la importación de las diferentes dependencias,
   servicios, otros componentes y tipos requeridos en el componente tal
   como se aprecia a continuación. Así mismo, se define las variables y
   endpoints de la API previamente definidos en el environment.

.. code:: typescript

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
     postCount = null;
     page = 1;
    

-  Se define los parametros requeridos en el constructor y se
   implementan los métodos requeridos en el inicializador de Angular.
   Tal como se muestra a continuación:

.. code:: typescript

    constructor( public blogService: BlogService, private router: Router, private wpAuthService:WPAuthService, private route: ActivatedRoute, public dialog: MatDialog, private notificationService: NotificationService, private spinner: NgxSpinnerService) {
       this.actualPage = 1;
       this.showGoUpButton = false;
     }

     async  ngOnInit() {
       this.getposts();
       }

Método: Obtener Post
^^^^^^^^^^^^^^^^^^^^

-  Este método se encarga de obtener el listado de los post recibidos
   existentes en el blog.

.. code:: typescript

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

Evento: Modal Edicción
^^^^^^^^^^^^^^^^^^^^^^

-  Este se encarga de llamar al método encargado de abrir el modal que
   se ocupará de la edicción de una publicación. Así mismo, en este
   evento se define el método ``.afterClosed()`` que se encarga de
   recibir los datos obtenidos del formulario de edicción del post y
   enviarlos al método ``updatepost`` definida en el Servicio POST.

.. code:: typescript

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

Evento: Modal Eliminar
^^^^^^^^^^^^^^^^^^^^^^

-  Este se encarga de llamar al método encargado de abrir el modal que
   se ocupará de la eliminación de una publicación. Así mismo, en este
   evento se define el método ``.afterClosed()`` que se encarga de
   recibir la respuesta de confirmación para enviar el Id del post al
   método ``deletepost`` definida en el Servicio POST.

.. code:: typescript

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

Método: Validar Logueo
^^^^^^^^^^^^^^^^^^^^^^

-  Este se encarga de retornar un boleano como respuesta del método
   ``getIsAuth`` definido en el Servicio Autenticación, para validar si
   el usuario se encuentra logueado.

.. code:: typescript

   checklogin() {
     return this.wpAuthService.getIsAuth();
   }

Función: Redirigir
^^^^^^^^^^^^^^^^^^

-  Esta se implementa para redirigir eficientemente al usuario a una
   ruta ya que el componente del blog es visible tanto de forma publica
   o privada en el aplicativo.

.. code:: typescript

   redirectTo(uri:string){
     this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
     this.router.navigate([uri]));
   }

Código Fuente completo del Componente: Post
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code:: typescript

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
     postCount = null;
     page = 1;

     
     constructor( public blogService: BlogService, private router: Router, private wpAuthService:WPAuthService, private route: ActivatedRoute, public dialog: MatDialog, private notificationService: NotificationService, private spinner: NgxSpinnerService) {
       this.actualPage = 1;
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

      /**Metodo que alimenta scroll infinito */
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
