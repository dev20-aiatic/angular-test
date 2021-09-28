Modelo: Usuario
###############

Este modelo de mapeo relacional de objetos nos permite asignar un objeto a la tabla
**users** presente en la base de datos, lo que permite efectuar consultas de una 
forma más efeciente.

Método: Define
**************
En el método ``.define()`` de sequelize se definen todos los atributos correspondientes a la tabla **users**
tales como: id; name; password; email; social; Profile_Id; createdAt; updatedAt con su respectivos
``DataTypes`` que permiten definir el tipo de dato y en el caso de las claves definir 
si son Primarias/Foráneas.

.. literalinclude:: ../../Backend/models/user.model.js
   :language: javascript
   :linenos:
   :lines: 11-34



Función: Associate
*******************
En la función ``.associate`` de sequelize se definen las asociaciones que tendrá este modelo con
los demás modelos, en especifico se define una relación uno a uno entre la tabla **users** y la 
tabla **profiles** mediante el tipo de asociación sequelize ``BelongsTo`` asignando como clave 
foránea el atributo ``Profile_Id`` definido en el Método Define.

.. literalinclude:: ../../Backend/models/user.model.js
   :language: javascript
   :linenos:
   :lines: 36-38


Código Fuente completo
**********************
.. literalinclude:: ../../Backend/models/user.model.js
   :language: javascript
   :linenos:
