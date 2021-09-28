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
   │   │   │   ├───dashboard
   │   │   │   ├───shared
   │   │   │   ├───wordpress
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
   :maxdepth: 2
   :caption: Contenido:
