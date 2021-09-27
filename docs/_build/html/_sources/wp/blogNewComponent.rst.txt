
Componente: Blog New
####################

.. warning:: 
   Este componente es sólo accesible cuando el usuario inicia sesion.
   
Este componente tiene como función permitir la creación de una nueva entrada
del blog mediante el método Crear Nueva Entrada previamente definido
en el Servicio Blog.

.. figure:: img/BlogNewComponent.png
   :alt: Vistazo al componente Blog New
   :align: center

Una vez que el usuario ingrese cada uno de los campos de la entrada y
de clic en el botón (Crear), aparecerá un modal en la pantala para notificar que la creación
de la nueva entrada se ha realizado exitosamente. Posteriormente se refrescará el componente
Blog en el que podrá apreciar los cambios efectuados.

.. figure:: img/BlogNewComponent1.png
   :alt: Vistazo al componente Blog al estar autenticado
   :align: center

-  Se procede a realizar la creación del componente ‘Blog’ con el siguiente
   comando:

``ng generate component components/wordpress/blog``

-  Se procede a efectuar la importación de las diferentes dependencias,
   servicios y tipos requeridos en el componente. 
   Así mismo, se define las variables, los parametros requeridos en el constructor 
   y se implementan los métodos requeridos en el inicializador de Angular tal
   como se aprecia a continuación:

.. literalinclude:: ../../src/app/components/wordpress/blognew/blognew.component.ts
   :language: typescript
   :linenos:
   :lines: 1-56


Método: Obtener Categorias
**************************

-  Este método se encarga de obtener el listado de categorias existentes mediante
   el método correspondiente definido en el Servicio Blog y hacerlos accesibles desde el
   componente asignandolos a la variable: categories

.. literalinclude:: ../../src/app/components/wordpress/blognew/blognew.component.ts
   :language: typescript
   :linenos:
   :lines: 61-66

Método: Crear Entrada
*********************

-  Este método se encarga de obtener y tratar los datos diligenciados en el formualario
   por el usuario para posteriormente enviarlos al método correspondiente definido en
   el Servicio Blog. 

.. literalinclude:: ../../src/app/components/wordpress/blognew/blognew.component.ts
   :language: typescript
   :linenos:
   :lines: 69-99

Métodos Carga de imagen
***********************

-  Estos se encargan recibir y trata los datos relacionados con el formulario de carga de imagen,
   así mismo, de alterar el evento al cargarse un archivo de imagen y convertir dicha imagen
   a base64 para su posterior envio al servicio correspondiente en el **Cuarto Método** tal como 
   se aprecia a continuación:

Primer método:

.. literalinclude:: ../../src/app/components/wordpress/blognew/blognew.component.ts
   :language: typescript
   :linenos:
   :lines: 102-115

Segundo método:

.. literalinclude:: ../../src/app/components/wordpress/blognew/blognew.component.ts
   :language: typescript
   :linenos:
   :lines: 118-122

Tercer método:

.. literalinclude:: ../../src/app/components/wordpress/blognew/blognew.component.ts
   :language: typescript
   :linenos:
   :lines: 125-130

Cuarto método:

.. literalinclude:: ../../src/app/components/wordpress/blognew/blognew.component.ts
   :language: typescript
   :linenos:
   :lines: 133-162

Código Fuente completo
**********************

.. literalinclude:: ../../src/app/components/wordpress/blognew/blognew.component.ts
   :language: typescript
   :linenos:

