# flowingsoft-backend
    
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


run:
npm i
npm i nodemon --save-dev
npm i @babel/core @babel/node @babel/cli @babel/preset-env -D --save-dev


POST: http://localhost:4000/api/transform-time/json
      {
        "time": "20:43:00",
        "timezone": -3
      }
  
GET : http://localhost:4000/api/transform-time/json
 








