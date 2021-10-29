const db = require("../database/models/");

const charactersController = {
  list: (req, res) => {
    db.Character.findAll().then((characters) => {
      let response = {
        meta: {
          status: 200,
          total: characters.length,
          url: "/characters",
        },
        data: characters,
      };
      res.status(200).json(response);
    });
  },
  detail: (req, res) => {
    const characterId = parseInt(req.params.id);
    db.Character.findByPk(characterId, {
      include: [
        { association: "movies", as: "movie_name", attributes: ["title"] },
      ],
    })
      .then((character) => {
        let response;
        if (character) {
          response = {
            meta: {
              status: 200,
              url: req.originalUrl,
            },
            data: character,
          };
          res.status(200).json(response);
        } else {
          response = {
            meta: {
              status: 200,
              url: req.originalUrl,
            },
            data: `El personaje con îd ${characterId} no existe`,
          };
          res.status(200).json(response);
        }
      })
      .catch((error) => res.send(error));
  },
  // CRUD
  create: (req, res) => {
    db.Character.create({
      name: req.body.name,
      image: req.body.image,
      age: req.body.age,
      weight: req.body.weight,
      story: req.body.story,
      movie_id: req.body.movie_id,
      first_appearance: req.body.first_appearance,
    })
      .then((confirm) => {
        let response;
        if (confirm) {
          response = {
            meta: {
              status: 201,
              total: confirm.length,
              url: "characters/create",
            },
            data: confirm,
          };
        } else {
          response = {
            meta: {
              status: 200,
              total: confirm.length,
              url: "characters/create",
            },
            data: confirm,
          };
        }
        res.status(200).json(response);
      })
      .catch((error) => res.send(error));
  },
  update: (req, res) => {
    const characterId = parseInt(req.params.id);
    db.Character.update(
      {
        name: req.body.name,
        image: req.body.image,
        age: req.body.age,
        weight: req.body.weight,
        story: req.body.story,
        movie_id: req.body.movie_id,
        first_appearance: req.body.first_appearance,
      },
      {
        where: { id: characterId },
      }
    )
      .then((confirm) => {
        let response;
        if (confirm) {
          response = {
            meta: {
              status: 200,
              total: confirm.length,
              url: "characters/update/:id",
            },
            data: confirm,
          };
        } else {
          response = {
            meta: {
              status: 204,
              total: confirm.length,
              url: "characters/update/:id",
            },
            data: confirm,
          };
        }
        res.status(200).json(response);
      })
      .catch((error) => res.send(error));
  },
  destroy: (req, res) => {
    const characterId = parseInt(req.params.id);
    db.Character.destroy({ where: { id: characterId }, force: true })
      .then((confirm) => {
        let response;
        if (confirm) {
          response = {
            meta: {
              status: 200,
              total: confirm.length,
              url: "characters/delete/:id",
            },
            data: confirm,
          };
        } else {
          response = {
            meta: {
              status: 204,
              total: confirm.length,
              url: "characters/delete/:id",
            },
            data: confirm,
          };
        }
        res.status(200).json(response);
      })
      .catch((error) => res.send(error));
  },
};

module.exports = charactersController;
