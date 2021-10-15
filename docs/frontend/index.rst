Frontend
########

Introducción
************
En esta sección encontrará la información técnica respecto a los componentes, servicios,
modulos, clases que conforman el aplicativo de angular que le permitirá comprender y compilar
de manera correcta el código implementado.


Estructura Directorio
*********************
.. code-block:: 
    
   ├───Backend
   ├───src
   │   ├───app
   │   │   ├───components
   │   │   │   ├───auth
   |   │   │   │   │   ├───login
   |   │   │   │   │   │   ├───login.component.css
   |   │   │   │   │   │   ├───login.component.html
   |   │   │   │   │   │   ├───login.component.ts
   |   │   │   │   │   ├───menu
   |   │   │   │   │   │   ├───menu.component.css
   |   │   │   │   │   │   ├───menu.component.html
   |   │   │   │   │   │   ├───menu.component.ts
   |   │   │   │   │   ├───register
   |   │   │   │   │   │   ├───register.component.css
   |   │   │   │   │   │   ├───register.component.html
   |   │   │   │   │   │   ├───register.component.ts
   |   │   │   │   │   │   │
   │   │   │   |   ├───auth-routing.module.ts
   │   │   │   │   ├───auth.component.css
   │   │   │   │   ├───auth.component.html
   │   │   │   │   ├───auth.component.ts
   |   │   │   │   ├───auth.module.ts
   │   │   │   ├───dashboard
   |   │   │   │   │   ├───history
   |   │   │   │   │   │   ├───history.component.css
   |   │   │   │   │   │   ├───history.component.html
   |   │   │   │   │   │   ├───history.component.ts
   |   │   │   │   │   ├───home
   |   │   │   │   │   │   ├───home.component.css
   |   │   │   │   │   │   ├───home.component.html
   |   │   │   │   │   │   ├───home.component.ts
   |   │   │   │   │   ├───profile
   |   │   │   │   │   │   ├───profile.component.css
   |   │   │   │   │   │   ├───profile.component.html
   |   │   │   │   │   │   ├───profile.component.ts
   |   │   │   │   │   ├───sidebar
   |   │   │   │   │   │   ├───sidebar.component.css
   |   │   │   │   │   │   ├───sidebar.component.html
   |   │   │   │   │   │   ├───sidebar.component.ts
   |   │   │   │   │   ├───video
   |   │   │   │   │   │   ├───video.component.css
   |   │   │   │   │   │   ├───video.component.html
   |   │   │   │   │   │   ├───video.component.ts
   |   │   │   │   │   │   │
   │   │   │   |   ├───dashboard-routing.module.ts
   │   │   │   │   ├───dashboard.component.css
   │   │   │   │   ├───dashboard.component.html
   │   │   │   │   ├───dashboard.component.ts
   |   │   │   │   ├───dashboard.module.ts
   │   │   │   ├───shared
   │   │   │   |   ├───shared.module.ts
   │   │   │   │   │
   │   │   │   ├───wordpress
   |   │   │   │   │   ├───blog
   |   │   │   │   │   │   ├───blog.component.css
   |   │   │   │   │   │   ├───blog.component.html
   |   │   │   │   │   │   ├───blog.component.ts
   |   │   │   │   │   ├───blogcategories
   |   │   │   │   │   │   ├───blogcategories.component.css
   |   │   │   │   │   │   ├───blogcategories.component.html
   |   │   │   │   │   │   ├───blogcategories.component.ts
   |   │   │   │   │   ├───blogdelete
   |   │   │   │   │   │   ├───blogdelete.component.css
   |   │   │   │   │   │   ├───blogdelete.component.html
   |   │   │   │   │   │   ├───blogdelete.component.ts
   |   │   │   │   │   ├───blogdetail
   |   │   │   │   │   │   ├───blogdetail.component.css
   |   │   │   │   │   │   ├───blogdetail.component.html
   |   │   │   │   │   │   ├───blogdetail.component.ts
   |   │   │   │   │   ├───blogedit
   |   │   │   │   │   │   ├───blogedit.component.css
   |   │   │   │   │   │   ├───blogedit.component.html
   |   │   │   │   │   │   ├───blogedit.component.ts
   |   │   │   │   │   ├───bloglogin
   |   │   │   │   │   │   ├───bloglogin.component.css
   |   │   │   │   │   │   ├───bloglogin.component.html
   |   │   │   │   │   │   ├───bloglogin.component.ts
   |   │   │   │   │   ├───blognew
   |   │   │   │   │   │   ├───blognew.component.css
   |   │   │   │   │   │   ├───blognew.component.html
   |   │   │   │   │   │   ├───blognew.component.ts
   |   │   │   │   │   ├───footer
   |   │   │   │   │   │   ├───footer.component.css
   |   │   │   │   │   │   ├───footer.component.html
   |   │   │   │   │   │   ├───footer.component.ts
   |   │   │   │   │   │   │
   │   │   │   |   ├───wordpress-routing.module.ts
   │   │   │   │   ├───wordpress.component.css
   │   │   │   │   ├───wordpress.component.html
   │   │   │   │   ├───wordpress.component.ts
   |   │   │   │   ├───wordpress.module.ts
   │   │   ├───interfaces
   │   │   │   ├───Auth.ts
   │   │   │   ├───Blog.ts
   │   │   │   ├───Locations.ts
   │   │   │   ├───Media.ts
   │   │   │   ├───post.ts
   │   │   │   ├───Profile.ts
   │   │   │   ├───User.ts
   │   │   │   ├───WP_Category.ts
   │   │   │   ├───WP_Token.ts
   │   │   │   ├───WP_User.ts
   │   │   ├───services
   │   │   │   ├───dashgular
   │   │   │   │   ├───auth-guard.service.ts
   │   │   │   │   ├───auth.service.ts
   │   │   │   │   ├───skill.service.ts
   │   │   │   │   ├───web.service.ts
   │   │   │   ├───wordpress
   │   │   │   │   ├───blog-guard.service.ts
   │   │   │   │   ├───blog.service.ts
   │   │   │   │   ├───wpauth.service.ts
   │   │   │   ├───notification.service.ts
   │   │   │───app.routing.module.ts
   │   │   │───app.component.css
   │   │   │───app.component.html
   │   │   │───app.module.ts
   │   ├───assets
   │   │   │───img
   │   │   │   │───daniel.jpg
   │   │   │   │───imgnotfound.jpg
   │   │   │   │───logo.png
   │   │   │   │───logo_unab.png
   │   │   │   │───mauricio.jpg
   │   │   │   │───user.png
   │   │   │   │───wordpress.png
   │   ├───environments
   │   │   ├───environment.prod.ts
   │   │   ├───environment.ts
   │   ├───index.html
   │   ├───main.ts
   │   ├───polyfills.ts
   │   ├───test.ts  
   │───angular.json
   │───package-lock.json
   │───package.json
   │───server.js
   │───tsconfig.app.json
   │───tsconfig.json

Ejecutar localmente
*******************

Seguir las instrucciones en el apartado Configuración Inicial descrita en el home de esta 
documentación `ver aquí <../index.html#configuracion-inicial>`_

Documentación
*************

Se procede a crear controladores, modelos, servicos, interfaces necesarias para el funcionamiento del 
Frontend:


.. toctree::
   :maxdepth: 1
   :caption: Contenido:

   authInterface
   locationInterface
   userInterface
   authService
   skillService
   webService
   guardService
   homeComponent
   loginComponent
   registerComponent
   profileComponent
   sidebarComponent
   videoComponent
   historyComponent