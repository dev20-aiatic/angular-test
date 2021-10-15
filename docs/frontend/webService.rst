
Servicio: Web
#############

Este servicio se encargará de efectuar la consulta de un repositorio JSON en el que se encuentran 
los municipios y departamentos de colombia que será usado en el formulario de perfil del usuario.

.. list-table:: Método de petición HTTP Utilizado
   :widths: 25 50 25
   :header-rows: 1
   
   * - Método 
     - Ruta recurso
     - Acción
   * - GET
     - /locationsUrl
     - Obtener listado de municipios y departamentos
  

-  Se realiza la creación del servicio con el siguiente comando:

``ng generate service services/web``

-  Se procede a efectuar la importación de las diferentes dependencias en el 
   servicio tal como se aprecia a continuación. Así mismo, se define la variable
   de la url del repositorio que será usada como API REST.

.. literalinclude:: ../../src/app/services/dashgular/skill.service.ts
   :language: typescript
   :linenos:
   :lines: 1-22

Método: Obtener ubicaciones
***************************

-  Se define este método encargado de obtener el JSON del repositorio.

.. literalinclude:: ../../src/app/services/dashgular/skill.service.ts
   :language: typescript
   :linenos:
   :lines: 26-28

Código Fuente completo
**********************
.. literalinclude:: ../../src/app/services/dashgular/web.service.ts
   :language: typescript
   :linenos:
