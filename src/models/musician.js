const sequelize = require('sequelize');

function musician(db) {
  return db.define('Musician', {
    musicianType: {
      type: sequelize.DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    instrument: sequelize.DataTypes.STRING,
  });

}

module.exports = { musician };
