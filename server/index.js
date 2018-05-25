//require server libraries
const express = require('express');
const helmet = require('helmet');
const parser = require('body-parser');
const path = require('path');
const session = require('express-session');
const db = require('../db');

const routes = require('../server/routers/routes');

//initialize express app
const app = express();
const PORT = 1337;

//utilize libraries and serve index
app.use(helmet());
app.use(parser.json());
app.use(parser.urlencoded( { extended: true } ));
app.use(express.static(path.join(__dirname,'../client/dist')));

//route requests to router
app.use('/', routes);

//load server on PORT
app.listen(PORT, () => console.log(`Listening on PORT:${PORT}`));

