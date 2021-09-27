Interface: Post
***************

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