
Componente: Blog Login
######################

Este componente tiene como función recibir las credenciales de acceso ingresadas por el usuario,
enviar dichas credenciales al método correspondiente del Servicio Autenticación para obtener el token
JWT de autenticación.


.. figure:: img/BlogLoginComponent.png
   :alt: Vistazo al modal Editar Post
   :align: center

Posteriormente el usuario será redigirido al componente Blog, en donde podrá apreciar
que en el borde superior derecho de las tarjetas de los post (que permite acceder a Modal Editar y Modal Eliminar)
en la barra inferior aparecerán nuevos botones

.. figure:: img/BlogLoginComponent1.png
   :alt: Botones adicionales en tarjeta
   :align: center

.. figure:: img/BlogLoginComponent2.png
   :alt: Botones adicionales en barra inferior
   :align: center

-  Se procede a realizar la creación del componente ‘Blog Login’ con el siguiente
   comando:

``ng generate component components/wordpress/bloglogin``

-  Se procede a efectuar la importación de las diferentes dependencias y
   servicios requeridos en el componente. 
   Así mismo, se definen variables, parametros requeridos en el constructor y se implementa el
   restablecimiento del formulario en el finalizador de Angular tal como se aprecia a continuación:

.. literalinclude:: ../../src/app/components/wordpress/bloglogin/bloglogin.component.ts
   :language: typescript
   :linenos:
   :lines: 1-31


Método: Autenticar
******************

-  Este método se encarga de obtener y tratar las credenciales ingresadas en el formulario y
   enviar al método correspondiente en el Servicio de Autenticación.

.. literalinclude:: ../../src/app/components/wordpress/bloglogin/bloglogin.component.ts
   :language: typescript
   :linenos:
   :lines: 32-36

Código Fuente completo
**********************

.. literalinclude:: ../../src/app/components/wordpress/bloglogin/bloglogin.component.ts
   :language: typescript
   :linenos:

