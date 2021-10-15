
Servicio: Autenticación
#######################

Este servicio se encargará de efectuar las peticiones a la Rest API
relacionadas con la autenticación del usuario y administrar la sesión del mismo en el aplicativo.

.. list-table:: Métodos de petición HTTP Utilizados
   :widths: 25 50 25
   :header-rows: 1
   
   * - Método 
     - Ruta recurso
     - Acción
   * - POST
     - /auth/register
     - Enviar datos para la creación de nuevo usuario
   * - POST
     - /auth/login
     - Enviar credenciales ingresadas por el usuario
   * - POST
     - /auth/google
     - Enviar datos para obtener token de inicio de sesión con cuenta google
   * - GET
     - /auth/renew
     - Validar y renovar token jwt
   * - GET
     - /auth/users
     - Obtener listado de usuarios registrados
   * - GET
     - /auth/user/info
     - Obtener información de usuario logueado
   * - GET
     - /auth/user/update
     - Actualizar perfil del usuario logueado
  

-  Se realiza la creación del servicio con el siguiente comando:

``ng generate service services/auth``

-  Se procede a efectuar la importación de las diferentes dependencias y
   tipos requeridos en el servicio tal como se aprecia a continuación.
   Así mismo, se define las variables y endpoints de la API previamente
   definidos en el environment.

.. literalinclude:: ../../src/app/services/dashgular/auth.service.ts
   :language: typescript
   :linenos:
   :lines: 1-21



Método: Registrar Usuario
*************************

-  Este método manipula la petición encarga de mandar los datos ingresados 
   por el usuario en el body de registo a la api rest, de acuerdo a la respuesta que se reciba de la
   api se cargará el dashboard o se mostrará mensaje un con la información al respecto. Así mismo, 
   este método es el encargado de almacenar el token y alterar los boleanos implementados para la
   validación del inicio de sesión.

.. literalinclude:: ../../src/app/services/dashgular/auth.service.ts
   :language: typescript
   :linenos:
   :lines: 24-28

Método: Loguear Usuario
***********************

-  Este método se encarga de manipular la petición designada para validar las credenciales de acceso 
   ingresadas por el usuario en el body de login a la api rest, de acuerdo a la respuesta que se reciba
   de la api se cargará el dashboard o se mostrará un mensaje con la información al respecto. Así mismo, 
   este método es el encargado de almacenar el token y alterar los boleanos implementados para la
   validación del inicio de sesión.

.. literalinclude:: ../../src/app/services/dashgular/auth.service.ts
   :language: typescript
   :linenos:
   :lines: 31-35


Método: Loguear Usuario con Google
**********************************

-  Este método manipula la petición encargada de mandar las credenciales de acceso 
   ingresadas por el usuario en el body de login a la api rest, para su correspondiente validación
   en el backend con la función designada por Google para dicho fin, de acuerdo a la respuesta que
   se reciba de la api de Google se cargará el dashboard o se mostrará un mensaje con la información al respecto.

.. literalinclude:: ../../src/app/services/dashgular/auth.service.ts
   :language: typescript
   :linenos:
   :lines: 38-40

Getters Sesión Iniciada
***********************

-  El primer getter se encarga de obtener el valor presente en el response ``userlogged`` con el fin de
   permitir validar el acceso del usuario en la plataforma.


.. literalinclude:: ../../src/app/services/dashgular/auth.service.ts
   :language: typescript
   :linenos:
   :lines: 43-45


-  El segundo getter se encarga de obtener el valor presente en el response ``loggedIn`` con el fin de
   permitir validar el acceso del usuario en la plataforma por medio del SocialAuthService.

.. literalinclude:: ../../src/app/services/dashgular/auth.service.ts
   :language: typescript
   :linenos:
   :lines: 48-50

- El tercer getter se encarga de obtener el valor presente en el boleano ``isAuthenticated`` que permite
  validar la sesión iniciada en la plataforma.

.. literalinclude:: ../../src/app/services/dashgular/auth.service.ts
   :language: typescript
   :linenos:
   :lines: 54-56

Método: Cerrar sesión
*********************

-  Este método se encarga de hacer llamado a la función Limpiar sesión y de cambiar a falso el estado de los boleanos 
   implementados para verificar el inicio de sesión.

.. literalinclude:: ../../src/app/services/dashgular/auth.service.ts
   :language: typescript
   :linenos:
   :lines: 59-63



Método: Validar y renovar token
*******************************

-  Este método manipula la petición encargada de obtener, validar y renovar el token de autenticación del usuario 
   si se es válido el token se procede a settear uno nuevo para mantener la sesión iniciada.

.. literalinclude:: ../../src/app/services/dashgular/auth.service.ts
   :language: typescript
   :linenos:
   :lines: 67-78

Método: Mantener Logueo
***********************

-  Este método se encarga de verificar y mantener iniciada la sesión del usuario.
   
.. literalinclude:: ../../src/app/services/dashgular/auth.service.ts
   :language: typescript
   :linenos:
   :lines: 82-86

Método: Obtener listado de usuarios
***********************************

-  Este método se encarga de obtener el listado con los registros de los usuarios registrados
   en el aplicativo que es implementada en el apartado de registros.
   
.. literalinclude:: ../../src/app/services/dashgular/auth.service.ts
   :language: typescript
   :linenos:
   :lines: 99-101

Método: Obtener perfil de usuario
**********************************

-  Este método se encarga de obtener los registros presentes en la tabla de unión de ``users`` y ``profiles``
   para el formulario del perfil de usuario.
   
.. literalinclude:: ../../src/app/services/dashgular/auth.service.ts
   :language: typescript
   :linenos:
   :lines: 108-115


Método: Actualizar perfil de usuario
************************************
-  Este método se encarga de modificar los registros presentes en la tabla de unión de ``users`` y ``profiles``
   para el formulario del perfil de usuario.
   
.. literalinclude:: ../../src/app/services/dashgular/auth.service.ts
   :language: typescript
   :linenos:
   :lines: 123-126


Código Fuente completo
**********************
.. literalinclude:: ../../src/app/services/dashgular/auth.service.ts
   :language: typescript
   :linenos:
