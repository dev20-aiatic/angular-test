Modelo: Perfil
##############

Este modelo de mapeo relacional de objetos nos permite asignar un objeto a la tabla
**profiles** presente en la base de datos permitiendo efectuar consultas de una 
forma más efeciente.


Método: Define
**************
En este método sequelize se definen todos los atributos correspondientes a la tabla **profiles**
tales como: id; lastname; natIdCard; DoB; city; deparment; country; postalcode; career;
photo; description; createdAt; updatedAt con su respectivos ``DataTypes`` que permiten 
definir el tipo de dato y en el caso de las claves definir si son Primarias/Foráneas.

.. literalinclude:: ../../Backend/models/profile.model.js
   :language: javascript
   :linenos:
   :lines: 11-38

Función: Associate
*******************

En la función ``.associate`` de sequelize se definen las asociaciones que tendrá este modelo con
los demás modelos, en especifico se define una relación uno a uno entre la tabla **profiles** y la 
tabla **users** mediante el tipo de asociación sequelize ``HasOne`` asignando como clave 
foránea el atributo ``Profile_Id`` definido en el Modelo Usuario. Por otra parte, se define una 
relación varios a varios entre la tabla **profiles** y la tabla **skills** mediante el tipo de
asociación sequelize ``belongsToMany`` definiendo  en las opciones de la relación el modelo 
``ProfileSkill`` que hará de tabla intermediaria entre las tablas  **profiles**  y **skills**
,por último, se define las columnas por las que el ORM buscará esta relación asignando como 
clave foránea el atributo ``Profile_Id`` y como clave alterna el atributo ``Skill_Id`` ambos definidos
en el Modelo PerfilHabilidades.



.. literalinclude:: ../../Backend/models/profile.model.js
   :language: javascript
   :linenos:
   :lines: 40-43


Código Fuente completo
**********************
.. literalinclude:: ../../Backend/models/profile.model.js
   :language: javascript
   :linenos:
