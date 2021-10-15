
Componente: Blog Detail
#######################

Este componente tiene como función mostrar la información detallada de
una entrada del blog elegida por el usuario mediante el método previamente definido en el
Servicio Blog.

.. figure:: img/BlogDetailComponent.png
   :alt: Vistazo al componente Detalles de una Entrada
   :align: center

-  Se procede a realizar la creación del componente ‘Blog Detail’ con el siguiente
   comando:

``ng generate component components/wordpress/blogdetail``

-  Se procede a efectuar la importación de las diferentes dependencias,
   servicios y tipos requeridos en el componente. Así mismo, se define las variables,
   los parametros requeridos en el constructor  y se implementan el método: obtener detalles del post
   en el inicializador de Angular tal como se aprecia a continuación:

.. literalinclude:: ../../src/app/components/wordpress/blogdetail/blogdetail.component.ts
   :language: typescript
   :linenos:
   :lines: 1-23


Método: Obtener Detalles Post
*****************************

-  Este método se encarga de obtener los detalles recibidos de una entrada 
   especifica y hacerlos accesibles desde el componente mediante la variable ``postDetail``

.. literalinclude:: ../../src/app/components/wordpress/blogdetail/blogdetail.component.ts
   :language: typescript
   :linenos:
   :lines: 25-34

Código Fuente completo
**********************

.. literalinclude:: ../../src/app/components/wordpress/blogdetail/blogdetail.component.ts
   :language: typescript
   :linenos:

