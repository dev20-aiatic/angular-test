Ruta: Habilidades
#################

Esta ruta se encuentra encargada de definir las rutas en la api para el controlador 
**Habilidades** con sus correspondientes tipo de petición tal como se muestra a continuación:

.. list-table:: Métodos de petición HTTP existentes en la ruta
   :widths: 25 50 25
   :header-rows: 1
   
   * - Método 
     - Ruta recurso
     - Acción
   * - GET
     - /
     - Devolver todos los registros de habilidades existentes
   * - GET
     - /:skillId
     - Devolver un único registro por su ID
   * - GET
     - /byQuery/:query
     - Devolver los registros que coincidan con la consulta
   * - POST
     - /
     - Crear registro de una nueva habilidad
   * - PUT
     - /:id
     - Actualizar el registro asociado a una habilidad existente
   * - DELETE
     - /:id
     - Eliminar el registro asociado a una habilidad existente


Código Fuente completo
**********************
.. literalinclude:: ../../Backend/routes/skills.route.js
   :language: javascript
   :linenos:
