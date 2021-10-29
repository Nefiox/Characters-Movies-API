const express = require('express');
const router = express.Router();
const charactersController = require('../controllers/charactersController');

//Listado de todos los characters
router.get('/', charactersController.list);
//Detalle del character
router.get('/:id', charactersController.detail);
//En que peliculas trabajo el character con id tal
// router.get('/:id/movies', charactersController.characterMovies);

//Agregar un character
router.post('/create', charactersController.create);
//Modificar un character
router.put('/update/:id', charactersController.update);
//Eliminar un character
router.delete('/delete/:id', charactersController.destroy);

module.exports = router;