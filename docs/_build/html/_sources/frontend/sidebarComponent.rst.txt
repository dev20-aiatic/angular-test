
Componente: Sidebar
###################

.. warning:: 
   El aspecto de este menú lateral se vera alterado de acuerdo al acceso (publicó/privado) en
   que se encuentre el usuario.

Este componente tiene como función servir de menú lateral en los diferentes componentes 
del aplicativo permitiendo que el usuario acceda fácilmente a cualquier componente y realizar
el cierre de sesión respectivo.

A continuación se puede previsualizar el aspecto del menú lateral de acuerdo a si se encuentrá
autenticado o no el usuario:

.. figure:: img/Change.png
   :alt: Aspecto del menú lateral
   :align: center

En el menú lateral izquierdo del aplicativo se incluirán nuevos vínculos que permite acceder a
``Perfil``, ``Registroa`` y ``Cerrar sesión``.

-  Se procede a realizar la creación del componente ‘Sidebar’ con el siguiente
   comando:

``ng generate component components/dashboard/sidebar``

-  Se procede a efectuar la importación de las diferentes dependencias,
   servicios requeridos en el componente. Así mismo, se definen los parametros
   requeridos en el constructor y se implementan el método requerido en el inicializador de Angular tal
   como se aprecia a continuación:

.. literalinclude:: ../../src/app/components/dashboard/sidebar/sidebar.component.ts
   :language: typescript
   :linenos:
   :lines: 1-31


Método: Obtener Info Usuario
****************************

-  Esta se implementa para la posterior implementación de un header con la foto y nombre del
   usuario logueado en el aplicativo.

.. literalinclude:: ../../src/app/components/dashboard/sidebar/sidebar.component.ts
   :language: typescript
   :linenos:
   :lines: 34-37

Función: Chequear Login
***********************

-  Esta función se encarga de llamar a la función Verificar Logueo Usuario definida 
   previamente en el Servicio Autenticación para retornar dicho boleano que
   permite corroborar el inicio de sesión.

.. literalinclude:: ../../src/app/components/dashboard/sidebar/sidebar.component.ts
   :language: typescript
   :linenos:
   :lines: 40-42

Función: Cerrar Sesión
**********************

-  Esta función e encarga de llamar a la función Cerrar sesión definida previamente
   en el Servicio Autenticación para posteriormente, redigir al usuario al componente Login.

.. literalinclude:: ../../src/app/components/dashboard/sidebar/sidebar.component.ts
   :language: typescript
   :linenos:
   :lines: 46-49

Código Fuente completo
**********************

.. literalinclude:: ../../src/app/components/dashboard/sidebar/sidebar.component.ts
   :language: typescript
   :linenos:

