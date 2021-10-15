
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
     - /token
     - Obtener token JWT por el logueo del usuario
   * - POST
     - /validate?token=
     - Verficar válidez del token del usuario
  

-  Se realiza la creación del servicio con el siguiente comando:

``ng generate service services/wpauth``

-  Se procede a efectuar la importación de las diferentes dependencias y
   tipos requeridos en el servicio tal como se aprecia a continuación.
   Así mismo, se define las variables y endpoints de la API previamente
   definidos en el environment.

.. literalinclude:: ../../src/app/services/wordpress/wpauth.service.ts
   :language: typescript
   :linenos:
   :lines: 1-26



Funciones: Verificar Logueo Usuario
***********************************

-  Se define dos funciones que se encargan de validar el inicio de sesión del usuario, esto se
   hace mediante el retorno de boleanos cargados en el método Login.

Primera función

.. literalinclude:: ../../src/app/services/wordpress/wpauth.service.ts
   :language: typescript
   :linenos:
   :lines: 29-31

Segunda función

.. literalinclude:: ../../src/app/services/wordpress/wpauth.service.ts
   :language: typescript
   :linenos:
   :lines: 34-36



Función: Obtener Token
**********************

-  Se define esta función que se encarga de retornar el token JWT recibido en el método Login
 
.. literalinclude:: ../../src/app/services/wordpress/wpauth.service.ts
   :language: typescript
   :linenos:
   :lines: 39-41

Método: Login
*************

-  Se define este método que será el encargado de enviar las credenciales de acceso
   del usuario a la ruta del recurso de autenticación dentro Wordpress Rest API, así mismo, 
   este método es el encargado de almacenar el token y alterar los boleanos implementados para la
   validación del inicio de sesión.

.. literalinclude:: ../../src/app/services/wordpress/wpauth.service.ts
   :language: typescript
   :linenos:
   :lines: 48-72

Función: Auto-Autenticación 
***************************

-  Este método se encarga de verificar y mantener iniciada la sesión del usuario

.. literalinclude:: ../../src/app/services/wordpress/wpauth.service.ts
   :language: typescript
   :linenos:
   :lines: 78-83

Método: Validar Token JWT
*************************

-  Se define este método para verificar la validez del token generado por 
   la rest api de Wordpress.

.. literalinclude:: ../../src/app/services/wordpress/wpauth.service.ts
   :language: typescript
   :linenos:
   :lines: 89-101

Función: Cerrar Sesión
**********************

-  Esta función se encarga de hacer llamado a la función Limpiar sesión y de cambiar a falso
   el estado de los boleanos implementados para verificar el inicio de sesión.

.. literalinclude:: ../../src/app/services/wordpress/wpauth.service.ts
   :language: typescript
   :linenos:
   :lines: 107-112

Función: Limpiar Sesión
***********************

-  Esta función se encarga de limpiar los datos de autenticación (Token JWT)
   almacenados en la sesión local, esta función es llamada por la función Cerrar Sesión.

.. literalinclude:: ../../src/app/services/wordpress/wpauth.service.ts
   :language: typescript
   :linenos:
   :lines: 114-116

Código Fuente completo
**********************
.. literalinclude:: ../../src/app/services/wordpress/wpauth.service.ts
   :language: typescript
   :linenos:
