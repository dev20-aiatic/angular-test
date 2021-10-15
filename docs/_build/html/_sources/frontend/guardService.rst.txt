Servicio: AuthGuard
###################

Este servicio se encargará de efectuar la denegación o aprobación del acceso
al usuario a los diferentes componentes en los que se requiera estar autenticado.

.. figure:: img/GuardService.png
   :alt: Vistazo al servicio Guard
   :align: center

-  Se realiza la creación del servicio para la Rest Api de WordPress con
   el siguiente comando:

  ``ng generate service services/auth-guard``

-  Se procede a efectuar la importación de las diferentes dependencias y
   tipos requeridos en el servicio tal como se aprecia a continuación.
   Así mismo, se define las variables y endpoints de la API previamente
   definidos en el environment.

.. literalinclude:: ../../src/app/services/dashgular/auth-guard.service.ts
   :language: typescript
   :linenos:
   :lines: 1-15

Interfaz: Can Activate Child
****************************

-  Se define esta interfaz que será la encargada de validar que se encuentra
   almacenado un token en la sesión local o que la función Verificar Logueo Usuario 
   definida previamente en el servicio de autenticación retorne un booleano del tipo "true".
   En base a esta validación, el servicio denegará o permitirá el acceso del usuario a los 
   componentes en los que se requiera estar autenticado.

.. literalinclude:: ../../src/app/services/dashgular/auth-guard.service.ts
   :language: typescript
   :linenos:
   :lines: 18-26

Código Fuente completo
**********************
.. literalinclude:: ../../src/app/services/dashgular/auth-guard.service.ts
   :language: typescript
   :linenos:

