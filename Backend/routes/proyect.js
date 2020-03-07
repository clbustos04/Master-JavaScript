'use strict'

var express = require('express');
var ProyectController = require('../controllers/proyect');

var router = express.Router();

/*var multer = require('multer');
var upload = multer({ dest: './uploads'});*/

var multiparty = require('connect-multiparty'),
    multipartyMiddleware = multiparty({ uploadDir: './uploads' });


router.get('/home',ProyectController.home);
router.post('/test',ProyectController.test);
router.post('/save-proyect',ProyectController.saveProyect);
router.get('/get-proyect/:id?',ProyectController.getProyect);
router.get('/get-proyects',ProyectController.getProyects);
router.put('/upd-proyect/:id',ProyectController.updateProyect);
router.delete('/del-proyect/:id',ProyectController.deleteProyect);
router.post('/upload-image/:id', multipartyMiddleware, ProyectController.uploadImage);
router.get('/get-image/:file',ProyectController.getImageFile);




module.exports = router;
