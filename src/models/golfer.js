const sequelize = require('sequelize');

function golfer(db) {
  return db.define('Golfer', {
    golferName: {
      type: sequelize.DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    golferCountry: sequelize.DataTypes.STRING,
    worldRanking: {
      type: sequelize.DataTypes.INTEGER,
      validate: {
        isDecimal: true,
      },
    },
  });
}

module.exports = { golfer };
