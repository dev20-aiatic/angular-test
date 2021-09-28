Modelo: Eventos
###############

Este modelo de mapeo relacional de objetos nos permite asignar un objeto a la tabla
**events** presente en la base de datos permitiendo efectuar consultas de una 
forma más efeciente.

Método: Define
**************
En el método ``.define()`` de sequelize se definen todos los atributos correspondientes a la tabla **events**
tales como: id; username; description; updatedAt con su respectivos ``DataTypes`` que permiten definir
el tipo de dato.

.. literalinclude:: ../../Backend/models/events.model.js
   :language: javascript
   :linenos:
   :lines: 11-25



Función: Associate
*******************
En la función ``.associate`` de sequelize se procede a dejarle en blanco debido a que este modelo
sólo será consultado al efectuarse cambios o alteraciones en los demás modelos y por ende, en las
diferentes tablas presentes en la base de datos.

.. literalinclude:: ../../Backend/models/events.model.js
   :language: javascript
   :linenos:
   :lines: 27-29


Código Fuente completo
**********************
.. literalinclude:: ../../Backend/models/events.model.js
   :language: javascript
   :linenos:
