const express = require('express');
const router = express.Router();
const charactersController = require('../controllers/charactersController');

//Listado de todos los characters
router.get('/', charactersController.list);


module.exports = router;