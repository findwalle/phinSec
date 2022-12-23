const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

// routers
const todoRouter = require('../routes/todoRoutes');

////////////
let PORT = 3000;

const app = express()

app.use(bodyParser.json()); //needed to read request json body

//allow requests from all origins
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'POST, GET, PUT, DELETE, OPTIONS'); //needed for CORS for DELETE (note "*" doesn't work)
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// router connect
app.use('/', todoRouter)

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../../client/src/index.html'));
});

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// server listen
console.log(`Listening on ${PORT}...`);
app.listen(PORT);