'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio')
          .then(()=>{
            console.log('conexión a bd OK !!');
            //Creación de servidor
            app.listen(port, ()=>{
              console.log('servidor corriendo en puerto 3700');
            });

          })
          .catch(error => console.log(error));
