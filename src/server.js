'use strict';

//used David Southers code for this project//

const express = require('express');
const { logger } = require('./middleware/logger');
const { validator } = require('./middleware/validator');

const { hello } = require('./handler/hello');
const { data } = require('./handler/data');
const { pageError } = require('./handler/404');
const { serverError } = require('./handler/500');

const person = (req, res) => {
    res.status(200).send({ name: req.query.name });
};

const app = express();

app.use(logger);


app.get('/', hello);
app.get('/data', data);
app.get('/person', validator, person);
app.use(pageError);
app.use(serverError);


// ---

function start(port) {
    app.listen(port, () => console.log(`Server listening on port ${port}`));
}

module.exports = {
    app,
    start,
};
