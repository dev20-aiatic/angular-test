Middleware: JWT
###############

La función de este middleware es validar el token generado por la función ``sign`` de la dependencia
**jwt**, posteriormente se encarga de parsear la cargar (payload) almacenada dentro del token para obtener
el id del usuario logueado.


Código Fuente completo
**********************
.. literalinclude:: ../../Backend/middlewares/jwt.middleware.js
   :language: javascript
   :linenos:
