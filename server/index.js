//require server libraries
const express = require('express');
const path = require('path');
const parser = require('body-parser');
const helmet = require('helmet');

//initialize express app
const app = express();
const PORT = 1337;

//utilize libraries and serve index
app.use(helmet());
app.use(parser.json());
app.use(parser.urlencoded( { extended: true } ));
app.use(express.static(path.join(__dirname,'../client/dist')));

app.get('/', (req, res) => {
  res.send();
});

app.listen(PORT, () => console.log(`Listening on PORT:${PORT}`));

