'use strict';

//used David Southers code for this project//

const express = require('express');
const { logger } = require('./middleware/logger');


require('./db');

const { hello } = require('./handler/hello');
const { data } = require('./handler/data');
const { person } = require('./handler/person');
const { validator } = require('./middleware/validator');
const { pageError } = require('./handler/404');
const { serverError } = require('./handler/500');
const { createMusician, listMusician, getMusician, deleteMusician, updateMusician } = require('./routes/musician');
const { createGolfer, listGolfers, getGolfer, deleteGolfer, updateGolfer } = require('./routes/golfer');
const { db } = require('./db');



const app = express();

app.use(logger);
app.use(express.json());


app.get('/', hello);
app.get('/data', data);
app.get('/person/:name', validator, person);

app.get('/golfer', listGolfers);
app.post('/golfer', createGolfer);
app.get('/golfer/:id', getGolfer);
app.delete('/golfer/:id', deleteGolfer);
app.put('/golfer/:id', updateGolfer);


app.get('/musician', listMusician);
app.post('/musician', createMusician);
app.get('/musician/:id', getMusician);
app.delete('/musician/:id', deleteMusician);
app.put('/musician/:id', updateMusician);


app.use(pageError);
app.use(serverError);



const shouldSyncOnStart = true;
async function start(port) {
  if (shouldSyncOnStart /* todo define this somewhere */) {

    await db.sync();
  }
  app.listen(port, () => console.log(`Server listening on port ${port}`));
}

module.exports = {
  app,
  start,
};
