'use strict'

var Proyect = require('../models/proyect');
var fs = require('fs');

var controller = {
  home:function(req, res){
    return res.status(200).send({
      message: 'Soy el home'
    });
  },
  test: function(req, res){
    return res.status(200).send({
      message: 'Soy el metodo test del controlador'
    });

  },
  saveProyect: function(req, res){
    var proyect = new Proyect();

    var params = req.body;
    proyect.name = params.name;
    proyect.description = params.description;
    proyect.category = params.category;
    proyect.year = params.year;
    proyect.langs = params.langs;
    proyect.image = null;

  proyect.save((err, proyectStored)=>{
    if(err)
        return res.status(500).send({
          message: 'Error al guardar documento'
      });

      if(!proyectStored)
          return res.status(404).send({
            message: 'No se ha podido guardar el documento'
        });

        return res.status(200).send({
           proyect:proyectStored
          });
  });


},

  getProyect: function(req, res){
    var proyectId = req.params.id;

    if (proyectId == null)
      return res.status(500).send({
      message: 'Parámetro vacío'
        });

    Proyect.findById(proyectId, (err, proyect) => {
      if(err)
          return res.status(500).send({
            message: 'El proyecto no existe'
          });

        if(!proyect)
            return res.status(404).send({
              message: 'Error al devolver los datos'
          });

          return res.status(200).send({
             proyect
            });


    });

  },

  getProyects:function(req, res){
     //  Proyect.find({year:2019}) condicion traer solo los año 2019
     // sort('-year') ordern de mayor a menor por año
     //sort('year') ordern por año (menor a mayor)
      Proyect.find({}).sort('year').exec((err, proyects)=>{
        if(err)
            return res.status(500).send({
              message: 'No hay proyectos para mostrar'
            });

          if(!proyects)
              return res.status(404).send({
                message: 'Error al devolver los datos'
            });

            return res.status(200).send({
               proyects
              });

      });
   },

 updateProyect: function(req, res){
  var proyectId = req.params.id;
  var update = req.body;

   Proyect.findByIdAndUpdate(proyectId, update, {new: true}, (err, proyectUpdated) => {
     if(err)
         return res.status(500).send({
           message: 'No existe el proyecto para actualizar'
         });

       if(!proyectUpdated)
           return res.status(404).send({
             message: 'Error al actualizar'
         });

         return res.status(200).send({
            proyect: proyectUpdated
           });

   });

 },

 deleteProyect: function(req, res){
     var proyectId = req.params.id;

     Proyect.findByIdAndRemove(proyectId, (err, proyectRemove)=>{
       if(err)
           return res.status(500).send({
             message: 'No existe el proyecto para eliminar'
           });

         if(!proyectRemove)
             return res.status(404).send({
               message: 'Error al eliminar'
           });

           return res.status(200).send({
              proyect: proyectRemove
             });
     });
 },

 uploadImage: function(req, res){
    var proyectId = req.params.id;
    var fileName = 'Image no subida';

   //return res.status(200).send({file: req.files, body: req.body.image });
    if (req.files){
      var filePath = req.files.image.path;
      var fileSplit = filePath.split('\\');
      var fileName = fileSplit[1];
      var extSplit = fileName.split('\.');
      var fileExt = extSplit[1];

      if (fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'png' || fileExt == 'gif') {



      Proyect.findByIdAndUpdate(proyectId, {image: fileName}, {new: true}, (err, proyectUpdated) => {
        if(err)
            return res.status(500).send({
              message: 'No se ha subido la imágen'
            });

          if(!proyectUpdated)
              return res.status(404).send({
                message: 'Error al subir imágen'
            });

            return res.status(200).send({
               proyect: proyectUpdated
              });

      });
    } else {
      fs.unlink(filePath, (err)=>{
        return res.status(200).send({ message: 'La extensión no es válida' });
      });
    }

       }
     }

};






module.exports = controller;
