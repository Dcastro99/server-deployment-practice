const sequelize = require('sequelize');

function musician(db) {
  return db.define('Musician', {
    musicianType: sequelize.DataTypes.STRING,
    instrument: sequelize.DataTypes.STRING,
  });

}

module.exports = { musician };
