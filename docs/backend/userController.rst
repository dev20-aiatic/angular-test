Controlador: Usuario
####################

Este controlador nos permite manejar la lógica detrás de las consultas a los modelos
previamente creados, en especifico esté se encarga de definir las funciones que efectuarán
consultas en los Modelos **Usuario**, **Perfil**, **Eventos**, en orden de manipular los registros 
en las correspondientes tablas presentes en la base de datos.


-  Se procede a efectuar la importación de las diferentes dependencias y modelos 
   requeridos en el controlador tal como se aprecia a continuación:

.. literalinclude:: ../../Backend/controllers/user.controller.js
   :language: javascript
   :linenos:
   :lines: 1-6


Método: Registro
****************
Este método se encarga de llamar los modelos **Usuario** y **Perfil** para efectuar las consultas 
requeridas en orden de llevar a cabo el registro del usuario. El método de registro se
ejecuta de la siguiente forma:


1. Mediante la Ruta Usuario se carga el Middleware Validación ver aquí, el cual se
   encarga de validar si el email ingresado por el usuario ya se encuentra registrado 
   en la tabla **users**.

2. De acuerdo a la validación, sino está registrado se procede a cifrar la contraseña ingresada
   mediante la función ``hash()`` de la dependencia **bcrypt**.

3. Se procede a efectuar las consultas  ``INSERT INTO users`` y ``INSERT INTO profiles`` 
   por medio del método sequelize ``.create()``.

4. Se genera el token JWT de logueo con la función ``sign()`` de la dependencia **jwt**
   definiendo como parámetros el id del usuario y expiración de 2 horas.

5. Dado el caso que se ejecuten correctamente o no cada uno de los anteriores pasos, se procede
   a devolver una respuesta en JSON mediante ``res.status().send()`` definiendo como parámetro los
   códigos de respuesta HTTP: ``200`` para respuesta satisfactoria al registro del usuario
   o código ``500`` para respuesta de solicitud no soportada por el servidor.

.. literalinclude:: ../../Backend/controllers/user.controller.js
   :language: javascript
   :linenos:
   :lines: 16-55

Método: Login
*************

Este es el encargado de llamar el modelo **Usuario** y efectuar las consultas 
requeridas en orden de llevar a cabo el inició de sesión del usuario. El método
de inicio de sesión se ejecuta de la siguiente forma:


1. Mediante la Ruta Usuario se carga el Middleware Validación ver aquí, el cual se
   encarga de validar sí se han ingresado cada uno de los campos requeridos para la
   autenticación.

2. Al pasarse la validación se procede a efectuar consulta del correo electrónico ingresado
   por el usuario mediante método sequelize ``.findOne()``, en caso de no encontrase se 
   devolverá una respuesta en JSON mediante ``res.status().send()`` definiendo como 
   parámetro el código de respuesta HTTP: ``401`` para indicar que no se completo la 
   autenticación y debe verificarse el correo ingresado.

3. Se procede a evaluar si la contraseña ingresada es válida mediante la función ``compare()``
   de la dependencia bcrypt, en caso de no coincida se devolverá una respuesta en JSON mediante
   ``res.status().send()`` definiendo como parámetro el código de respuesta HTTP: ``401`` 
   para indicar que no se completo la autenticación y debe verificarse la contraseña ingresada.

4. Se genera el token JWT de logueo con la función ``sign()`` de la dependencia **jwt**
   definiendo como parámetros el id del usuario y expiración de 24 horas.

5. Dado el caso que se ejecuten correctamente o no cada uno de los anteriores pasos, se procede
   a devolver una respuesta en JSON mediante ``res.status().send()`` definiendo como parámetro los
   códigos de respuesta HTTP: ``200`` para respuesta satisfactoria a la autenticación del usuario
   o código ``500`` para respuesta de solicitud no soportada por el servidor.



.. literalinclude:: ../../Backend/controllers/user.controller.js
   :language: javascript
   :linenos:
   :lines: 65-99


Método: Usuario_Perfil
**********************
Este es el encargado de llamar los modelo **Usuario** y **Perfil** para efectuar las consultas 
requeridas en orden de llevar a cabo la consulta de los registros del usuario y su perfil relacionado.
El método de consultar usuario y perfil se ejecuta de la siguiente forma:


1. Mediante la Ruta Usuario se carga el Middleware JWT ver aquí, el cual se
   encarga de validar el token y descomponer el payload para retornar el usuario
   relacionado a este.

2. Despúes de realizada la validación del token se procede la consulta del id asociado al token de
   logueo mediante método sequelize ``.findOne()``, en caso de no encontrase se devolverá una 
   respuesta en JSON mediante ``res.status().send()`` definiendo como parámetro el código de 
   respuesta HTTP: ``200`` para respuesta satisfactoria a la consulta o código ``500`` para 
   respuesta de solicitud no soportada por el servidor.



.. literalinclude:: ../../Backend/controllers/user.controller.js
   :language: javascript
   :linenos:
   :lines: 107-126


Método: Actualizar Perfil
*************************
Este es el encargado de llamar los modelos **Usuario**, **Perfil** y **Eventos** para efectuar las consultas 
requeridas en orden de llevar a cabo la actualización de los registros del usuario y su perfil relacionado.
El método de actualizar usuario y perfil correspondiente se ejecuta de la siguiente forma:


1. Mediante la Ruta Usuario se carga el Middleware JWT ver aquí, el cual se
   encarga de validar el token y descomponer el payload para retornar el usuario
   relacionado a este.

2. Se procede a verificar la existencia del usuario mediante el método sequelize 
   ``.findOne()`` definiendo como parametro el id asociado al payload presente en 
   el token de logueo.

3. Se procede a efectuar la actualización de los registros del usuario y perfil mediante
   método sequelize ``.update()`` definiendo como parámetro para el usuario el id asociado al payload
   presente en el token de logueo y para el perfil el atributo  ``Profile_Id`` presente en el
   usuario encontrado.

4. Finalmente se procede a crear el registro correspondiente de la modificación del perfil
   de usuario en el Modelo Eventos mediante el método sequelize ``.create()`` definiendo como
   parámetro el nombre del usuario que efectuó la modificación y descripción que da constancia de la
   modificación del perfil.

5. Dado el caso que se ejecuten correctamente o no cada uno de los anteriores pasos, se procede
   a devolver una respuesta en JSON mediante ``res.status().send()`` definiendo como parámetro los
   códigos de respuesta HTTP: ``200`` para respuesta satisfactoria a la autenticación del usuario
   o código ``500`` para respuesta de solicitud no soportada por el servidor.


.. literalinclude:: ../../Backend/controllers/user.controller.js
   :language: javascript
   :linenos:
   :lines: 137-169

Método: Login con Google
************************
Este es el encargado de llamar los modelos **Usuario** y **Perfil** para efectuar las consultas 
requeridas en orden de llevar a cabo la actualización de los registros del usuario y su perfil relacionado.
El método de actualizar usuario y perfil correspondiente se ejecuta de la siguiente forma:

1. Se procede a verificar la existencia del usuario mediante el método sequelize 
   ``.findOne()`` definiendo como parametro el email asociado a la cuenta de google.

2. De no encontrarse registrado se procede a efectuar la creación de registros de usuario y perfil
   mediante método sequelize ``.create()`` asignando los atributos posibles para el perfil y para el 
   usuario se asignan como atributos los registros obtenidos de la cuenta de google y el id asociado al
   perfil previamente creado.

3. Se procede a efectuar la actualización de los registros del perfil mediante el método sequelize
   ``.update()`` definiendo como párametro el atributo ``Profile_Id`` presente en el usuario creado.

4. Despúes de crear los registros se genera el token JWT de logueo con la función ``sign()`` de la 
   dependencia **jwt** definiendo como parámetros el id del usuario y expiración de 24 horas.

5. Dado el caso que se ejecuten correctamente o no cada uno de los anteriores pasos, se procede
   a devolver una respuesta en JSON mediante ``res.status().send()`` definiendo como parámetro los
   códigos de respuesta HTTP: ``200`` para respuesta satisfactoria a la autenticación del usuario
   o código ``500`` para respuesta de solicitud no soportada por el servidor.


.. literalinclude:: ../../Backend/controllers/user.controller.js
   :language: javascript
   :linenos:
   :lines: 180-236


Método: Renovar Token
*********************
Este es el encargado de llamar al modelo **Usuario** para efectuar las consultas requeridas
en orden de llevar a la renovación del token relacionado con el usuario logueado.
El método de renovar token se ejecuta de la siguiente forma:

1. Se procede a verificar la existencia del usuario mediante el método sequelize 
   ``.findOne()`` definiendo como parametro el id asociado al payload presente en 
   el token de logueo.

2. Despúes de crear los registros se genera el token JWT de logueo con la función ``sign()`` de la 
   dependencia **jwt** definiendo como parámetros el id del usuario y expiración de 24 horas.

3. Dado el caso que se ejecuten correctamente o no cada uno de los anteriores pasos, se procede
   a devolver una respuesta en JSON mediante ``res.status().send()`` definiendo como parámetro los
   códigos de respuesta HTTP: ``200`` para respuesta satisfactoria a la renovación del usuario
   o código ``500`` para respuesta de solicitud no soportada por el servidor.


.. literalinclude:: ../../Backend/controllers/user.controller.js
   :language: javascript
   :linenos:
   :lines: 270-293


Código Fuente completo
**********************
.. literalinclude:: ../../Backend/controllers/user.controller.js
   :language: javascript
   :linenos:
