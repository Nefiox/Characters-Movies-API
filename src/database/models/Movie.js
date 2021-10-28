module.exports = (sequelize, dataTypes) => {
  let alias = "Movie";

  let cols = {
    id: {
      type: dataTypes.BIGINT(10).UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    image: {
      type: dataTypes.STRING(100),
      allowNull: true,
    },
    title: {
      type: dataTypes.STRING(50),
      allowNull: false,
    },
    release_date: {
      type: dataTypes.DATEONLY,
      allowNull: false,
    },
    rating: {
      type: dataTypes.DECIMAL(3, 1).UNSIGNED,
      allowNull: false,
    },
    genre_id: {
      type: dataTypes.BIGINT(10),
      allowNull: false,
    },
  };

  let config = {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: false,
  };

  const Movie = sequelize.define(alias, cols, config);

  Movie.associate = function (models) {
    Movie.belongsTo(models.Genre, {
      as: "genre",
      foreignKey: "genre_id",
    });

    Movie.belongsToMany(models.Character, {
      as: "characters",
      through: "character_movie",
      foreignKey: "movie_id",
      foreignKeyConstraint: true,
      otherKey: "character_id",
      timestamps: false,
      onDelete: "cascade",
    });
  };

  return Movie;
};
