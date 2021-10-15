
Componente:  Profile
####################

.. warning:: 
   Este componente es sólo accesible cuando el usuario inicia sesion.
   
Este componente tiene como función permitir la visualización y modificación de los registros
relacionados con el perfil del usuario.

.. figure:: img/profileComponent.png
   :alt: Vistazo al componente Profile
   :align: center

Una vez que el usuario ingrese cada uno de los campos que desee modificar del perfil y
de clic en el botón (Guardar cambios), aparecerá un modal en la pantalla para notificar que la
modificación del perfil se logró o no exitosamente.


.. figure:: img/Profilestep.png
   :alt: Mensajes obtenidos al actualizar el perfil
   :align: center

-  Se procede a realizar la creación del componente ‘Profile’ con el siguiente
   comando:

``ng generate component components/dashboard/profile``

-  Se procede a efectuar la importación de las diferentes dependencias,
   servicios y tipos requeridos en el componente. 
   Así mismo, se define las variables, los parametros requeridos en el constructor 
   y se implementan los métodos requeridos en el inicializador de Angular tal
   como se aprecia a continuación:

.. literalinclude:: ../../src/app/components/dashboard/profile/profile.component.ts
   :language: typescript
   :linenos:
   :lines: 1-48


Método: Llenar Formulario
*************************

-  Este método se encarga de setear los campos de perfil del usuario en el formulario reactivo
   mediante el método angular ``patchValue``

.. literalinclude:: ../../src/app/components/dashboard/profile/profile.component.ts
   :language: typescript
   :linenos:
   :lines: 52-74

Función: Alternar Select
************************

-  Esta función se encarga de modificar el comportamiento de los material angular select
   que se encuentran en el formulario de perfil, permitiendo alternar el listado de municipios
   de acuerdo al departamento seleccionado.

.. literalinclude:: ../../src/app/components/dashboard/profile/profile.component.ts
   :language: typescript
   :linenos:
   :lines: 78-91


Función: Obtener perfil
***********************

-  Esta función se encarga de recoger los registros asociados al perfil del usuario obtenidos
   por el método ``getinfo()`` definido en el Servicio de Autenticación.

.. literalinclude:: ../../src/app/components/dashboard/profile/profile.component.ts
   :language: typescript
   :linenos:
   :lines: 94-96


Método Guardar Perfil
*********************

-  Este método se encarga de obtener las modificaciones efectuadas en el formulario y
   enviarlas al endpoint de la API encargada de guardar dichos cambios.

.. literalinclude:: ../../src/app/components/dashboard/profile/profile.component.ts
   :language: typescript
   :linenos:
   :lines: 99-131


Código Fuente completo
**********************

.. literalinclude:: ../../src/app/components/dashboard/profile/profile.component.ts
   :language: typescript
   :linenos:

