'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProyectSchema = Schema({
  name: String,
  description: String,
  category: String,
  year: Number,
  langs:String,
  image: String
});

module.exports = mongoose.model('Proyect', ProyectSchema);
//proyects -> guarda los documentos en esa colección
