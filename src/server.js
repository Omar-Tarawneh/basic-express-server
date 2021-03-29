'use strict';

const express = require('express');
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const notFound = require('./error-handlers/404.js');
const serverError = require('./error-handlers/500.js');

const app = express();
app.use(logger);

// routes

app.get('/person', validator, (req, res) => {
  let PersonName = req.query.name;
  res.status(200).json({ name: PersonName });
});

/**
 * start function
 * will start the server in the port you give
 * @param {number}
 *
 * @example
 *      start(3000);
 */
const start = (port) => {
  app.listen(port, () => {
    console.log('The server is runing in the port:', port);
  });
};

app.use('*', notFound);
app.use(serverError);
module.exports = {
  app: app,
  start: start,
};
