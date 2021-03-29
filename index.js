'use strict';

const server = require('./src/server.js');
require('dotenv').config();

server.start(process.env.PORT);
