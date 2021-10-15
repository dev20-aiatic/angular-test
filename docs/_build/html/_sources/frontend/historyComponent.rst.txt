
Componente: Registros de eventos
################################

.. warning:: 
   Este componente es sólo accesible cuando el usuario inicia sesion. 

Este componente tiene como función mostrar una tabla en la que se desgloza 
las modificación de perfil realizadas por parte del usuario con su fecha correspondiente.


.. figure:: img/registrosComponent.png
   :alt: Vistazo al componente Registros
   :align: center

-  Se procede a realizar la creación del componente ‘Registro de eventos’ con el siguiente
   comando:

``ng generate component components/dashboard/history``

-  Se procede a efectuar la importación de las diferentes dependencias requeridos en el componente. 
   Así mismo, se definen los parametros requeridos en el constructor y se implementan los métodos requeridos
   en el inicializador de Angular tal como se aprecia a continuación:

.. literalinclude:: ../../src/app/components/dashboard/history/history.component.ts
   :language: typescript
   :linenos:
   :lines: 1-26

Código Fuente completo
**********************

.. literalinclude:: ../../src/app/components/dashboard/history/history.component.ts
   :language: typescript
   :linenos:

