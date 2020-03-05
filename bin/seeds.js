const userModel = require("../models/User");
const buildingModel = require("../models/Building");
const mongoose = require("mongoose");
const URL =
  "mongodb://heroku_h81z1zwn:sriigi5p6p4lhrkq554fn1vm5h@ds353957.mlab.com:53957/heroku_h81z1zwn";

const users = [
  {
    name: "Andy",
    lastname: "Tisba",
    role: "super admin",
    email: "andy.tisba@gmail.com",
    password: "$2b$10$U4qsJ0Gs7wyZX.gfKbwdmea8Q8wL9IiBWgqbF1bMINviT3oQCCChK",
    avatar:
      "https://res.cloudinary.com/dw7iq3zoa/image/upload/v1583335036/info-pictures/ynpxjhuxhrai84klaxya.jpg",
    buildings: [],
    newMessages: 0,
    messages: [],
    canMessage: true,
    canInfo: true
  },
  {
    name: "Ina",
    lastname: "Munizaga",
    role: "super admin",
    email: "mgmuniza@gmail.com",
    password: "$2b$10$eHvbJC0ZG2nKJcEMsfCXQ.9MiOlf64JLfXqfsozjOo0TcX.MXoNSu",
    avatar:
      "https://res.cloudinary.com/dw7iq3zoa/image/upload/v1583403756/info-pictures/iyp7hrxdqdepwtaap4cp.jpg",
    buildings: [],
    newMessages: 0,
    messages: [],
    canMessage: true,
    canInfo: true
  },
  {
    name: "SuperAdmin",
    lastname: "Foo",
    role: "super admin",
    email: "foo@bar.baz",
    password: "$2b$10$U4qsJ0Gs7wyZX.gfKbwdmea8Q8wL9IiBWgqbF1bMINviT3oQCCChK",
    avatar:
      "https://res.cloudinary.com/dw7iq3zoa/image/upload/v1583403756/info-pictures/iyp7hrxdqdepwtaap4cp.jpg",
    buildings: [],
    newMessages: 0,
    messages: [],
    canMessage: true,
    canInfo: true
  }
];

const buildings = [
  {
    name: "Ironhack",
    adress: {
      number: 226,
      street: "Boulevard Voltaire",
      postalcode: "75011",
      city: "Paris",
      country: "France"
    },
    informations: [],
    keys: [1, 2, 3]
  },
  {
    name: "Bat7",
    adress: {
      number: 7,
      street: "Rue Bouvier",
      postalcode: "75018",
      city: "Paris",
      country: "France"
    },
    informations: [],
    keys: [4, 5, 6]
  }
];

mongoose
  .connect(URL, { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
    userModel
      .insertMany(users)
      .then(dbRes => {
        console.log("users created");
        buildingModel
          .insertMany(buildings)
          .then(dbRes => {
            console.log("buildings created");
          })
          .catch(err => {
            console.log(" there was an error creating the buildings");
          });
      })
      .catch(err => {
        console.log(" there was an error creating the users");
      });
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });
