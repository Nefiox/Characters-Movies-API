const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;


var corsOptions = {
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
app.use(express.urlencoded({ extended: false })); // URL Parser
app.use(express.json()); // JSON Parser
//Aquí estoy disponiendo la posibilidad para utilizar el seteo en los formularios para el usod e los metodos put ó delete
app.use(methodOverride('_method'));
app.use(express.static(path.resolve(__dirname, '../public')));


app.use('/', (req, res) => res.send('Server config ok'))

//Activando el servidor desde express
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
