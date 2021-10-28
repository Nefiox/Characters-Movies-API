const db = require('../database/models/');

const charactersController = {
    'list': (req, res) => {
        db.Character.findAll()
        .then(characters => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: characters.length,
                    url: 'api/characters'
                },
                data: characters
            }
                res.json(respuesta);
            })
    },
}

module.exports = charactersController;