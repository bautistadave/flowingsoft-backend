# flowingsoft

Para la resolucion de esta prueba se instalaron los siguientes paquetes con sus respectivas versiones:
    
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "mongoose": "^6.0.11"

    "@babel/cli": "^7.15.7",
    "@babel/core": "^7.15.8",
    "@babel/node": "^7.15.8",
    "@babel/preset-env": "^7.15.8",
    "jest": "^27.3.1",
    "nodemon": "^2.0.14",
    "supertest": "^6.1.6"


Para replicar el proyecto se debe ejecutar el comando npm install

A continuacion se detallan los endpoints utilizados con ejemplos que son enviados como parametros, cabe mensionar que para probar los empoints se hizo uso
de la herramienta insomia en su version mas actual:

NOTA: No se logro añadir las pruebas unitarias para todos los casos, pero se probo la correcta funcionalidad de cada metodo con la herramienta insomia


METODO POST Problema 1:  http://localhost:3000/api/time
      {
        "time": "20:43:00",
        "timezone": -3
      }
      
------------------------------------------------------------------------------


METODO GET Problema 2:http://localhost:3000/api/timezone
    "No requiere parametros"
    
    
------------------------------------------------------------------------------


METODO POST Problema 2:  http://localhost:3000/api/timezone
      {
         "timeZoneName": "test",
         "offsetwithUTC": -2,
         "countriesThatUseIt": ["BO","USA"]
      }
      
      
------------------------------------------------------------------------------


METODO UPDATE Problema 2:  http://localhost:3000/api/timezone/61709d12731df8a15c638ae5
      {
          "timeZoneName": "test",
          "offsetwithUTC": -2,
          "countriesThatUseIt": ["BO","USA"]
      }
      
      
------------------------------------------------------------------------------


METODO UPDATE Problema 2:  http://localhost:3000/api/timezone/6170a4e52d27ef62dfc23abc
  "Solo se requiere enviar el id del elemento a eliminar"
  
  
   


