
Componente: Login
#################

Este componente tiene como función recibir las credenciales de acceso ingresadas por el usuario,
enviar dichas credenciales al método correspondiente en el Servicio Autenticación para obtener el token
JWT de autenticación.


.. figure:: img/dashlogin.png
   :alt: Vistazo al componenete de inicio de sesión
   :align: center

Una vez sean validadas las credenciales será redigirido al componente Home, en donde aparecerá una ventana
emergente dando la bienvenida al usuario.

.. figure:: img/loggedsuccesful.png
   :alt: Login Mensaje
   :align: center

------------

-  Se procede a realizar la creación del componente ‘Login’ con el siguiente
   comando:

``ng generate component components/auth/login``

-  Se procede a efectuar la importación de las diferentes dependencias, servicios, formulario reactivo,
   otros componentes y tipos requeridos en el componente. Así mismo, se definen variables, parametros 
   requeridos en el constructor y se implementan los métodos requeridos en el inicializador de Angular 
   tal como se aprecia a continuación:

.. literalinclude:: ../../src/app/components/auth/login/login.component.ts
   :language: typescript
   :linenos:
   :lines: 1-51

Método: Autenticar con Google
*****************************

-  Este método se encarga de manipular las credenciales ingresadas en el formulario y
   validarlas con el método correspondiente en el Servicio de Autenticación con Google.

.. literalinclude:: ../../src/app/components/auth/login/login.component.ts
   :language: typescript
   :linenos:
   :lines: 53-73

Método: Autenticar con Facebook
*******************************

-  Este método se encarga de manipular las credenciales ingresadas en el formulario y
   validarlas con el método correspondiente en el Servicio de Autenticación con Facebook.

.. literalinclude:: ../../src/app/components/auth/login/login.component.ts
   :language: typescript
   :linenos:
   :lines: 76-96

Método: Autenticar
******************

-  Este método se encarga de manipular las credenciales ingresadas en el formulario y
   validarlas con el método correspondiente en el Servicio de Autenticación.

.. literalinclude:: ../../src/app/components/auth/login/login.component.ts
   :language: typescript
   :linenos:
   :lines: 103-118

Código Fuente completo
**********************

.. literalinclude:: ../../src/app/components/auth/login/login.component.ts
   :language: typescript
   :linenos:

