module.exports = (sequelize, dataTypes) => {
  let alias = "Genre";

  let cols = {
    id: {
      type: dataTypes.BIGINT(10).UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING(50),
      allowNull: false,
    },
    image: {
      type: dataTypes.STRING(100),
      allowNull: true,
    },
  };

  let config = {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: false,
  };

  const Genre = sequelize.define(alias, cols, config);

  Genre.associate = function (models) {
    Genre.hasMany(models.Movie, {
      as: "movies",
      foreignKey: "genre_id",
    });
  };

  return Genre;
};
