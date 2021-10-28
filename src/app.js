const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const cors = require("cors");
// Routes
//Aquí llamo a la ruta de la api de characters
const charactersRouter = require('./routes/characters');
//Aquí llamo a la ruta de la api de movies
// const moviesRouter = require('./routes/movies');
//Aquí llamo a la ruta de la api de users
// const usersRouter = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));
let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header("Access-Control-Allow-Methods", "OPTIONS, POST, GET, PUT, DELETE");
    res.header('Access-Control-Allow-Headers', "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
    next();
  }
app.use(allowCrossDomain);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//Aquí estoy disponiendo la posibilidad para utilizar el seteo en los formularios para el uso de los metodos PUT ó DELETE
app.use(methodOverride('_method'));
app.use(express.static(path.resolve(__dirname, '../public')));

app.use('/characters', charactersRouter);
// app.use('/movies', moviesRouter);
// app.use('/auth', usersRouter);

//Activando el servidor desde express
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));