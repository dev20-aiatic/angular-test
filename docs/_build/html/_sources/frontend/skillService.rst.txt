
Servicio: Habilidades
#####################

Este servicio se encargará de efectuar las peticiones a la Rest API 
relacionadas con la autenticación del usuario y administrar la sesión del mismo en el aplicativo.

.. list-table:: Métodos de petición HTTP Utilizados
   :widths: 25 50 25
   :header-rows: 1
   
   * - Método 
     - Ruta recurso
     - Acción
   * - GET
     - /skills
     - Devolver listado de habilidades
   * - GET
     - /skills/byQuery/
     - Devolver listado de habilidades filtrado
   * - POST
     - /skills
     - Añadir una nueva habilidad
   * - PUT
     - /skills/
     - Modificar una habilidad
   * - DELETE
     - /skills/
     - Eliminar registro de una habilidad

-  Se realiza la creación del servicio con el siguiente comando:

``ng generate service services/skill``

-  Se procede a efectuar la importación de las diferentes dependencias en el 
   servicio tal como se aprecia a continuación. Así mismo, se define las variables
   y endpoints de la API REST previamente definidos en el environment.

.. literalinclude:: ../../src/app/services/dashgular/skill.service.ts
   :language: typescript
   :linenos:
   :lines: 1-13

Método: Obtener habilidades
***************************

-  Se define este método encargado de obtener todos los registros existentes en
   la tabla ``skills``.

.. literalinclude:: ../../src/app/services/dashgular/skill.service.ts
   :language: typescript
   :linenos:
   :lines: 15-17

Método: Filtrar habilidades
***************************

-  Se define este método encargado de devolver filtrado los registros presentes
   en la tabla ``skills``.

.. literalinclude:: ../../src/app/services/dashgular/skill.service.ts
   :language: typescript
   :linenos:
   :lines: 18-20

Método: Crear nueva habilidad
*****************************

-  Se define este método encargado de la creación de nuevos registros
   en la tabla ``skills``.

.. literalinclude:: ../../src/app/services/dashgular/skill.service.ts
   :language: typescript
   :linenos:
   :lines: 21-23

Método: Modificar una habilidad
*******************************

-  Se define el método que está encargado de la modificación de habilidades
   existentes.

.. literalinclude:: ../../src/app/services/dashgular/skill.service.ts
   :language: typescript
   :linenos:
   :lines: 24-26

Método: Eliminar habilidad
**************************

-  Se define este método encargado de la eliminación de habilidades.

.. literalinclude:: ../../src/app/services/dashgular/skill.service.ts
   :language: typescript
   :linenos:
   :lines: 27-29

Código Fuente completo
**********************
.. literalinclude:: ../../src/app/services/dashgular/skill.service.ts
   :language: typescript
   :linenos:
