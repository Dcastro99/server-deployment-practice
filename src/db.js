const { Sequelize, DataTypes } = require('sequelize');
// const { musician } = require('./models' / musician);

// let connection_string;
// switch (process.env.NODE_ENV) {
//     case 'production':
//         connection_string = process.env.DATABASE_URL;
//         break;
//     case 'dev':
//         connection_string = 'sqlite::memory:';
//         break;
//     case 'staging':
//     default:
//         connection_string = `sqlite:${process.env.SQLITE_FILE ?? '../db'}`;
//         break;
// }

const db = new Sequelize('sqlite::memory:');

const Musician = db.define('Musician', {

  musicianType: DataTypes.STRING,
  instrument: DataTypes.STRING,
});

console.log(Musician);

db.sync();

module.exports = {
  db,
  Musician,
};
