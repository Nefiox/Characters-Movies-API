module.exports = (sequelize, dataTypes) => {
  let alias = "Character";

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
    name: {
      type: dataTypes.STRING(50),
      allowNull: false,
    },
    weight: {
      type: dataTypes.DECIMAL(4, 2),
      allowNull: false,
    },
    story: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    first_appearance: {
      type: dataTypes.DATEONLY,
      allowNull: false,
    },
    movie_id: {
      type: dataTypes.BIGINT(10).UNSIGNED,
      allowNull: false,
    },
  };

  let config = {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: false,
  };

  const Character = sequelize.define(alias, cols, config);

  Character.associate = function (models) {
    Character.belongsToMany(models.Movie, {
      as: "movies",
      through: "character_movie",
      foreignKey: "character_id",
      otherKey: "movie_id",
      timestamps: false,
      onDelete: "cascade",
    });
  };

  return Character;
};
