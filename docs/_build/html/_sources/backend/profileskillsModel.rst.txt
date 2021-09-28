Modelo: PerfilHabilidades
#########################

Este modelo de mapeo relacional de objetos nos permite asignar un objeto a la tabla
**profileskills** presente en la base de datos con el fin de que esta tabla sea de intermediaria
de la relación entre las tablas **profiles** y **skills**

Método: Define
**************
En el método ``.define()`` de sequelize se definen todos los atributos correspondientes a la tabla
intermediaria **profileskills** tales como: Profile_Id; Skill_Id; createdAt; updatedAt con su respectivos
``DataTypes`` que permiten definir el tipo de dato.

.. literalinclude:: ../../Backend/models/profileskills.model.js
   :language: javascript
   :linenos:
   :lines: 3-16



Función: Associate
*******************
En la función ``.associate`` de sequelize se procede a dejarle en blanco debido a que este modelo
sólo es el intermediario entre la relación existente de los Modelos Perfil y Habilidades

.. literalinclude:: ../../Backend/models/profileskills.model.js
   :language: javascript
   :linenos:
   :lines: 17-19


Código Fuente completo
**********************
.. literalinclude:: ../../Backend/models/profileskills.model.js
   :language: javascript
   :linenos:
