
Componente: Blog Footer
#######################

.. warning:: 
   Las opciones disponibles aparecen o desaparecen de acuerdo a la función Chequear Login.

Este componente tiene como función servir de barra inferior en los diferentes componentes del apartado 
Blog del aplicativo para que el usuario acceda fácilmente a las opciones: ver, crear
nuevas entradas, ver categorias e iniciar/cerrar sesión. 

A continuación se puede previsualizar la barra inferior al no estar autenticado el usuario:

.. figure:: img/BlogLoginComponent2.png
   :alt: Vistazo al componente Blog New
   :align: center

Una vez que el usuario inicie sesión, la barra inferior habilitará y ocultará opciones tal como 
se aprecia a continuación:

.. figure:: img/BlogLoginComponent3.png
   :alt: Vistazo al componente Blog al estar autenticado
   :align: center

-  Se procede a realizar la creación del componente ‘Blog’ con el siguiente
   comando:

``ng generate component components/wordpress/blog``

-  Se procede a efectuar la importación de las diferentes dependencias,
   servicios requeridos en el componente. Así mismo, se definen los parametros
   requeridos en el constructor y se implementan el método requerido en el inicializador de Angular tal
   como se aprecia a continuación:

.. literalinclude:: ../../src/app/components/wordpress/footer/footer.component.ts
   :language: typescript
   :linenos:
   :lines: 1-24


Función: Chequear Login
***********************

-  Esta función se encarga de llamar a la función Verificar Logueo Usuario definida 
   previamente en el Servicio Autenticación para retornar dicho boleano que
   permite corroborar el inicio de sesión.

.. literalinclude:: ../../src/app/components/wordpress/blognew/blognew.component.ts
   :language: typescript
   :linenos:
   :lines: 61-66

Función: Redirigir
******************

-  Esta se implementa para redirigir eficientemente al usuario a una ruta ya que
   los componente del blog son visible tanto de forma publica o privada en el aplicativo. 

.. literalinclude:: ../../src/app/components/wordpress/blognew/blognew.component.ts
   :language: typescript
   :linenos:
   :lines: 32-37

Método: Cerrar Sesión
*********************

-  Este método se encarga de llamar a la función Cerrar sesión definida previamente
   en el Servicio Autenticación para posteriormente, redigir al usuario al componente Blog.

.. literalinclude:: ../../src/app/components/wordpress/blognew/blognew.component.ts
   :language: typescript
   :linenos:
   :lines: 39-42

Código Fuente completo
**********************

.. literalinclude:: ../../src/app/components/wordpress/footer/footer.component.ts
   :language: typescript
   :linenos:

