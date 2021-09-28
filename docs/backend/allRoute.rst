Ruta: Todas 
###########

Esta ruta se encuentra encargada de definir las rutas en la api para el controlador 
**Habilidades** con sus correspondientes tipo de petición tal como se muestra a continuación:

.. list-table:: Rutas implementadas
   :widths: 25 50 25
   :header-rows: 1
   
   * - Nombre 
     - Ruta
     - Acción
   * - Usuario
     - /api/auth
     - Endpoint usado por la Ruta Usuario
   * - Habilidades
     - /api/skills
     - Endpoint usado por la Ruta Habilidades     


Código Fuente completo
**********************
.. literalinclude:: ../../Backend/routes/all.route.js
   :language: javascript
   :linenos:
