
Componente: Register
####################

Este componente tiene como función recibir los datos requeridos para la creación de un nuevo usuario y 
enviarlo al método correspondiente en el Servicio Autenticación para crear el usuario y obtener el token
JWT de autenticación.


.. figure:: img/dashsregistro.png
   :alt: Vistazo al componenete de inicio de sesión
   :align: center

Una vez se registre exitosamente el usuario será redigirido al componente Home, en donde aparecerá una ventana
emergente dando las gracias al usuario por su registro.

.. figure:: img/registersuccesful.png
   :alt: Login Mensaje
   :align: center

------------

-  Se procede a realizar la creación del componente ‘Register’ con el siguiente
   comando:

``ng generate component components/auth/register``

-  Se procede a efectuar la importación de las diferentes dependencias, servicios, formulario reactivo,
   otros componentes y tipos requeridos en el componente. Así mismo, se definen variables, parametros 
   requeridos en el constructor y se implementan los métodos requeridos en el inicializador de Angular 
   tal como se aprecia a continuación:

.. literalinclude:: ../../src/app/components/auth/register/register.component.ts
   :language: typescript
   :linenos:
   :lines: 1-37

Método: Registro
****************

-  Este método se encarga de enviar los datos al endpoint de registro de la Rest API, en caso de 
   recibirse una respuesta exitosa el usuario será logueado automaticamente y redirigido al componente
   Home.

.. literalinclude:: ../../src/app/components/auth/register/register.component.ts
   :language: typescript
   :linenos:
   :lines: 41-56


Código Fuente completo
**********************

.. literalinclude:: ../../src/app/components/auth/register/register.component.ts
   :language: typescript
   :linenos:

