require("dotenv").config();
require("./config/dbConnection");


const express = require("express");
const session = require("express-session");
const cors = require("cors");
const logger = require("morgan");
const path = require("path");
const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo")(session);

const app = express();

app.use(logger("dev"));
app.use(express.json());


app.use(
  session({
    cookie: { secure: false, maxAge: 4 * 60 * 60 * 1000 }, // 4 hours
    resave: true,
    saveUninitialized: true,
    secret: process.env.SECRET_SESSION
  })
);

var corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));


var indexRouter = require("./routes/index");
var authRouter = require("./routes/auth");
var usersRouter = require("./routes/users");
var buildingRouter = require("./routes/buildings");
var informationsRouter = require("./routes/informations");
var messagesRouter = require("./routes/messages");

app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/users", usersRouter);
app.use("/buildings", buildingRouter);
app.use("/informations", informationsRouter);
app.use("/messages", messagesRouter);

module.exports = app;
