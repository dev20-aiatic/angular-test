Modelo: Index
#############

Este modelo se encarga de asignar las configuraciónes del ORM sequelize definidas en el JSON 
de configuración, así mismo, de definir el parámetro de entorno de ejecución para el proyecto.
Por otra parte, es el encargado de sincronizar los modelos existentes y crear sus tablas 
correspondientes en la base de datos gestionando la función ``.associate`` declarada en cada uno de estos.


Código Fuente completo
**********************
.. literalinclude:: ../../Backend/models/index.model.js
   :language: javascript
   :linenos:
