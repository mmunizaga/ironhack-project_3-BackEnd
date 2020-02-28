require("dotenv").config();
require("./config/dbConnection");

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: process.env.CLIENT_URL
  }

  app.use(cors(corsOptions))

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var buildingRouter = require('./routes/buildings');


app.use(logger('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/buildings', buildingRouter);

module.exports = app;
