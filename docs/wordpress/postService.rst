
Servicio: Blog
##############

Este servicio se encargará de efectuar las peticiones a la Rest API
relacionadas con las publicaciones del blog

.. list-table:: Métodos de petición HTTP Utilizados
   :widths: 25 25 25 25
   :header-rows: 1
   
   * - Método 
     - Ruta recurso
     - Acción
     - Autenticación
   * - GET
     - /posts?_embed=true
     - Devolver listado de entradas.
     - No requerida
   * - GET
     - /posts/${id}?_embed
     - Devolver una entrada.
     - No requerida   
   * - POST
     - /posts
     - Crear una nueva entrada.
     - Sí es requerida
   * - PUT
     - /posts/${id}?_embed
     - Modificar una entrada.
     - Sí es requerida
   * - DELETE
     - /posts/{postId}
     - Borrar una entrada.
     - Sí es requerida
   * - GET
     - /categories
     - Devolver listado de categorias.
     - No requerida
   * - GET
     - /comments?post=${id}
     - Devolver comentarios de una publicación.
     - No requerida


-  Se realiza la creación del servicio para la Rest Api de WordPress con
   el siguiente comando:

  ``ng generate service services/blog``

-  Se procede a efectuar la importación de las diferentes dependencias y
   tipos requeridos en el servicio tal como se aprecia a continuación.
   Así mismo, se define las variables y endpoints de la API previamente
   definidos en el environment.

.. literalinclude:: ../../src/app/services/wordpress/blog.service.ts
   :language: typescript
   :linenos:
   :lines: 1-20

Procedimiento: Error de respuesta
*********************************

-  Este procedimiento es el encargado de gestionar las respuestas de
   error obtenidas de la API, este recibe como parametro el error de la
   depedencia HttpErrorResponse

.. literalinclude:: ../../src/app/services/wordpress/blog.service.ts
   :language: typescript
   :linenos:
   :lines: 27-37


Método: Listar Entradas
***********************

-  Se define este método que será el encargado de traer todas las
   entradas del blog de acuerdo al parámetro de número de
   publicaciones por página, el número de página y ordenándolos
   por su última modificación.

.. literalinclude:: ../../src/app/services/wordpress/blog.service.ts
   :language: typescript
   :linenos:
   :lines: 44-64

Método: Detalles publicación
****************************

-  Este método se encargará de traer la información detallada de una
   entrada especifica, para ello recibe como parámetro el id del
   post para realizar la correspondiente llamada al punto final.

.. literalinclude:: ../../src/app/services/wordpress/blog.service.ts
   :language: typescript
   :linenos:
   :lines: 71-77

Método: Subir imagen destacada
*******************************

-  Se define este método para la carga de imagen destacada que será
   usada al momento de modificar o crear una nueva entrada, este
   método recibe como parametro un array con la información de la imagen.
   Adicionalmente se define un encabezado en el que se agregará los detalles
   de autenticación requeridos para efectuar exitosamente la petición.

.. literalinclude:: ../../src/app/services/wordpress/blog.service.ts
   :language: typescript
   :linenos:
   :lines: 122-132


Método: Crear nueva Entrada
***************************

-  Este método recibe como parametro un array con la información requerida para la
   creación de una nueva entrada. Adicionalmente se define un encabezado en
   el que se agregará los detalles de autenticación requeridos para
   efectuar exitosamente la petición.

.. literalinclude:: ../../src/app/services/wordpress/blog.service.ts
   :language: typescript
   :linenos:
   :lines: 107-116

Método: Modificar Entrada
*************************

-  Este método es el encargado de modificar una entrada existente en el blog,
   este recibe como parametro el id del post y un array (data) con la
   información requerida para la modificación de esta. Adicionalmente
   se define un encabezado en el que se agregará los detalles de
   autenticación requeridos para efectuar exitosamente la petición.

.. literalinclude:: ../../src/app/services/wordpress/blog.service.ts
   :language: typescript
   :linenos:
   :lines: 141-150

Método: Eliminar Entrada
************************

-  Este se encarga de efectuar la eliminación de una entrada, este
   recibe como parametro el id del post y un array (data) con la
   información requerida para la modificación de la misma. Adicionalmente
   se define un encabezado en el que se agregará los detalles de
   autenticación requeridos para efectuar exitosamente la petición.

.. literalinclude:: ../../src/app/services/wordpress/blog.service.ts
   :language: typescript
   :linenos:
   :lines: 158-167

Método: Listar Categorias
*************************

-  Se define el método que se encarga de obtener el listado de todas las
   categorias existentes en el blog.

.. literalinclude:: ../../src/app/services/wordpress/blog.service.ts
   :language: typescript
   :linenos:
   :lines: 97-99

Al añadir cada uno de los métodos mencionados y el procedimiento
encargado de manipular los errores de la API el código del servicio
tendrá el siguiente aspecto:

Método: Obtener Comentarios
***************************

- Se define el método encargado de devolver los comentarios relacionados con
  una publicación del blog.

.. literalinclude:: ../../src/app/services/wordpress/blog.service.ts
   :language: typescript
   :linenos:
   :lines: 84-90

Código Fuente completo
**********************
.. literalinclude:: ../../src/app/services/wordpress/blog.service.ts
   :language: typescript
   :linenos:

