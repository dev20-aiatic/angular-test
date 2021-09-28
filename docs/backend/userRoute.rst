Ruta: Usuario
#############

Esta ruta se encuentra encargada de definir las rutas en la api para el controlador 
**Usuario** con sus correspondientes tipo de petición tal como se muestra a continuación:

.. list-table:: Métodos de petición HTTP existentes en la ruta
   :widths: 25 25 25 25
   :header-rows: 1
   
   * - Método 
     - Ruta recurso
     - Acción
     - Middleware
   * - POST
     - /register
     - Recibir body y crear perfil/usuario
     - Validación
   * - POST
     - /login
     - Recibir body y permitir login de usuario
     - Validación
   * - GET
     - /renew-token
     - Renovar el token de logueo
     - JWT
   * - GET
     - /users
     - Devolver el listado de usuarios registrados
     - Validación
   * - POST
     - /google
     - Recibir body y login de usuario con Google
     - Ninguno
   * - PUT
     - /user/update
     - Actualizar los registros asociados al perfil del usuario
     - JWT
   * - GET
     - /user/info
     - Devolver los registros asociados al perfil del usuario
     - JWT


Código Fuente completo
**********************
.. literalinclude:: ../../Backend/routes/user.route.js
   :language: javascript
   :linenos:
