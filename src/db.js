const { Sequelize } = require('sequelize');
const { musician } = require('./models/musician');
const { golfer } = require('./models/golfer');

let connection_string;
switch (process.env.NODE_ENV) {
  case 'production':
    connection_string = process.env.DATABASE_URL;
    break;
  case 'dev':
  case 'staging':
    connection_string = 'sqlite::memory:';
    break;

  default:
    connection_string = `sqlite:${process.env.SQLITE_FILE ?? '../db'}`;
    break;
}


const db = new Sequelize(connection_string, {
  // For postgres only
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});



// db.sync();

module.exports = {
  db,
  Musician: musician(db),
  Golfer: golfer(db),
};
