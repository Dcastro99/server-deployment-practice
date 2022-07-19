const sequelize = require('sequelize');

function golfer(db) {
  return db.define('Golfer', {
    golferName: sequelize.DataTypes.STRING,
    golferCountry: sequelize.DataTypes.STRING,
    worldRanking: sequelize.DataTypes.INTEGER,
  });
}

module.exports = { golfer };
