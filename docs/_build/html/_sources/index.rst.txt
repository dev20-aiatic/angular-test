.. Proyecto Angular Practicas 2021-2 AIATIC documentation master file, created by
   sphinx-quickstart on Fri Sep 24 18:17:04 2021.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.


Documentación
#############

Introducción
************

En la presente documentación encontrará toda la información técnica relacionada con el proyecto  
**Dashgular**, aplicativo elaborado en el trascurso del segundo semestre de 2021 de prácticas profesionales en **A&A SOLUCIONES TIC**. 

Carácteristicas
***************
En específico, el aplicativo brinda al usuario final un dashboard, en el que podrá: registrarse, iniciar sesión, modificar el perfil correspondiente, acceder al registro de eventos de los usuarios, acceso a un video embebido y un crud para la administración de publicaciones de blog Wordpress, haciendo uso de la **Rest API de Wordpress**. 

Tecnologias implementadas
*************************
A continuación se listarán las tecnologias y librerias implementadas para el desarrollo del presente proyecto:

* **Front-end**
    * Angular 12
    * Typescript

* **Back-end**
    * NodeJS
    * Javascript
    * Express
    * Sequelize ORM

* **Control de versiones**
    * Git

* **Documentación**
    * Mkdocs

* **Bases de datos**
    * MYSQL

Configuración Inicial
*********************

Para ejecutar localmente  el proyecto se sugiere seguir los siguientes pasos:

.. code-block:: 

   # Clonar el proyecto desde el repositorio alojado en Github:
   git clone  https://github.com/dev20-aiatic/angular-test
   
   # Dirigirse a la carpeta del proyecto
   cd angular-test

   # Instalar depedencias del Front
   npm install

   # Dirigise a la carpeta del Backend
   cd backend

   # Instalar depedencias del backend
   npm install
   
Posteriormente, se procede a efectuar configuración inicial del Backend, para ello:

1. Dirigirse a la carpeta *config* contenida en el directorio Backend tal como se
   puede apreciar a continuación:

.. code-block:: 
   
   Backend
   ├───config
   │   ├───config.json


2. Modificar en el archivo config.json la configuración de entorno de desarrollo, las credenciales
   de acceso a la base de datos que desee utilizar y el dialecto correspondiente al sistema de gestión
   de base de datos relación que implementar.

.. code-block:: 

   {
  "development": {
    "username": "root",
    "password": null,
    "database": "dashgular",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": 0
  },

3. Antes de correr la Rest Api, dirigirse a la carpeta *models* contenida tambíen en el directorio 
   Backend tal como se puede apreciar a continuación:

.. code-block:: 
   
   Backend
   ├───models
   │   ├───index.model.js

4. Quitar la línea de comentario de la función encargada de sincronizar los modelos de Sequelize
   de este modo:

.. code-block:: 
   
   /* Función para cargar los modelos en una nueva base de datos */
   sequelize.sync()

Por consiguiente, el proyecto se encuentra listo para ser ejecutado para ello ejecute los siguientes
comandos:

.. code-block:: 

   # Ejecutar Backend
   node server.js / npm start

   # Dirigise a la carpeta del proyecto
   cd ..

   # Ejecutar Frontend
   ng serve / npm start

.. toctree::
   :maxdepth: 2
   :caption: Contenido:
   
   backend/index
   frontend/index
   wp/wordpress
