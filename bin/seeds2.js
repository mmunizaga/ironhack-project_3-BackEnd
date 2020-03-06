const userModel = require("../models/User");
const buildingModel = require("../models/Building");
const mongoose = require("mongoose");
const URL =
  "mongodb://heroku_h81z1zwn:sriigi5p6p4lhrkq554fn1vm5h@ds353957.mlab.com:53957/heroku_h81z1zwn";

const users = [
  {
    name: "Shannon",
    lastname: "Kimmel",
    role: "user",
    email: "shannon@gmail.com",
    password: "$2b$10$eHvbJC0ZG2nKJcEMsfCXQ.9MiOlf64JLfXqfsozjOo0TcX.MXoNSu",
    avatar:
      "https://lh6.googleusercontent.com/POiEdBqQCcB9QxciahuQ4Oy3ZHb31Z-nB7Lmyt-_krQD1_kDgF8keKq5nlEtYAxGrhziaEotXZpJoT8U2O5Avajt6VH6TIp2uFsAsDWfNg=s1600",
    buildings: ["5e60d85c10d407000dcfc4c2"],
    newMessages: 0,
    messages: [],
    canMessage: true,
    canInfo: true
  },
  {
    name: "Coline",
    lastname: "Velard",
    role: "user",
    email: "coline@gmail.com",
    password: "$2b$10$eHvbJC0ZG2nKJcEMsfCXQ.9MiOlf64JLfXqfsozjOo0TcX.MXoNSu",
    avatar:
      "https://lh3.googleusercontent.com/gwlbJO6R-FJB6USzEaaWdnXsZ7eK3s1eVc1o44EXnCo6DxcFBjpj6L_dleEEFqkOg4C9U3aQ6nBCDQBsIoIHbwd0EBpJ-eN9lywGtrGJ=s920",
    buildings: ["5e60d85c10d407000dcfc4c2"],
    newMessages: 0,
    messages: [],
    canMessage: true,
    canInfo: true
  },
  {
    name: "Alex",
    lastname: "Meyer",
    role: "user",
    email: "alex@gmail.com",
    password: "$2b$10$eHvbJC0ZG2nKJcEMsfCXQ.9MiOlf64JLfXqfsozjOo0TcX.MXoNSu",
    avatar:
      "https://lh5.googleusercontent.com/gSWCQjKzUDdTJNYo1Z-ZwWk6UpxiVuDxTbqP4L9-EU6o48irm1b0hZgvS3s-oEDATd_f9GTjcfoIl9AHnweFlGnt96WvOsrEiauhDkV4=s768",
    buildings: ["5e60d85c10d407000dcfc4c2"],
    newMessages: 0,
    messages: [],
    canMessage: true,
    canInfo: true
  },
  {
    name: "Andrew",
    lastname: "Nunez",
    role: "user",
    email: "andrew@gmail.com",
    password: "$2b$10$eHvbJC0ZG2nKJcEMsfCXQ.9MiOlf64JLfXqfsozjOo0TcX.MXoNSu",
    avatar:
      "https://lh5.googleusercontent.com/EwrmD3zDtNYg-MbYcUa6pkUzp5c9J-hB6W8022zL7Kcju56vW7vCqHAo-RBwLfInJXN4h-DBLGtIAWq1i33qQ0LCBvr4AtVSCENqbw31=s1600",
    buildings: ["5e60d85c10d407000dcfc4c2"],
    newMessages: 0,
    messages: [],
    canMessage: true,
    canInfo: true
  },
  {
    name: "Louis",
    lastname: "Margot",
    role: "user",
    email: "louis@gmail.com",
    password: "$2b$10$eHvbJC0ZG2nKJcEMsfCXQ.9MiOlf64JLfXqfsozjOo0TcX.MXoNSu",
    avatar:
      "https://lh6.googleusercontent.com/29PAqJiSQAS7HVYGA9iEEfzBVu1ceqkv94lWwDpxQ6EqBdtI-BpIY4BN_D7FfQBNPl9wTFiJGy8aYUlSNgyNELLfXmgYEpLNL-IjOcSL=s1600",
    buildings: ["5e60d85c10d407000dcfc4c2"],
    newMessages: 0,
    messages: [],
    canMessage: true,
    canInfo: true
  },
  {
    name: "Mehmet",
    lastname: "Can",
    role: "user",
    email: "mehmet@gmail.com",
    password: "$2b$10$eHvbJC0ZG2nKJcEMsfCXQ.9MiOlf64JLfXqfsozjOo0TcX.MXoNSu",
    avatar:
      "https://lh3.googleusercontent.com/-DaHGO19d1hv5DNNuVnx_DJDOztTsvUyGh25hp1s2vzNj-i7KG2hXZ5rcIscLlJWtwdLKb-TEtSLXAQc-pbxWkjDnVC45XHSSIyteD2O=s1440",
    buildings: ["5e60d85c10d407000dcfc4c2"],
    newMessages: 0,
    messages: [],
    canMessage: true,
    canInfo: true
  },
  {
    name: "Remy",
    lastname: "Pham",
    role: "user",
    email: "remy@gmail.com",
    password: "$2b$10$eHvbJC0ZG2nKJcEMsfCXQ.9MiOlf64JLfXqfsozjOo0TcX.MXoNSu",
    avatar:
      "https://lh5.googleusercontent.com/XZ_0JlLk-H5vUxHiEv64LVPUDGnNaqH3Gl1fiKuh6v8Ludcx0gNGTD9hFTXCMbaO2O8Cd2MGBm63jlKa1ffgoOKUX0ePlNdfoM2uqtx4=s1600",
    buildings: ["5e60d85c10d407000dcfc4c2"],
    newMessages: 0,
    messages: [],
    canMessage: true,
    canInfo: true
  },
  {
    name: "Kathleen",
    lastname: "Domingo",
    role: "user",
    email: "kathleen@gmail.com",
    password: "$2b$10$eHvbJC0ZG2nKJcEMsfCXQ.9MiOlf64JLfXqfsozjOo0TcX.MXoNSu",
    avatar:
      "https://lh4.googleusercontent.com/u0k3yeDEfQVeyl2M8ksgRjPxWuXbhCf8s2LsHtSKzTD7fohlPGLoN9RaM-M0AcwiqoHJdcUCoRitNVEkdFV_MZxG2Cg3pW6auONSK5Ns=s1600",
    buildings: ["5e60d85c10d407000dcfc4c2"],
    newMessages: 0,
    messages: [],
    canMessage: true,
    canInfo: true
  },
  {
    name: "Yannick",
    lastname: "Bourenane",
    role: "user",
    email: "yannick@gmail.com",
    password: "$2b$10$eHvbJC0ZG2nKJcEMsfCXQ.9MiOlf64JLfXqfsozjOo0TcX.MXoNSu",
    avatar:
      "https://lh3.googleusercontent.com/QQcvs4JQZrYgeJREpK4e0o-zH0DBFkb4a8aYFGXtmdHesSJcwq_2pgwQhlnbQXX-Rc_WorJUmiqyuKGWeyYKrT0z6gH1rCp3uR3zbmlH1EFoDrc1rH98gVS4RfRL1_Clo7lIhc6811M",
    buildings: ["5e60d85c10d407000dcfc4c2"],
    newMessages: 0,
    messages: [],
    canMessage: true,
    canInfo: true
  },
  {
    name: "Paul",
    lastname: "Carillion",
    role: "user",
    email: "paul@gmail.com",
    password: "$2b$10$eHvbJC0ZG2nKJcEMsfCXQ.9MiOlf64JLfXqfsozjOo0TcX.MXoNSu",
    avatar:
      "https://lh4.googleusercontent.com/KAjHq0AlKM3PWFv6Qtmp6e8i7u4ok8B3-ONLodZx-gg71NcvL1xpeL4Qe6v_73v70397U6jr7FiAv6KHywg14eAdnve01VmvEon36pVA=s1600",
    buildings: ["5e60d85c10d407000dcfc4c2"],
    newMessages: 0,
    messages: [],
    canMessage: true,
    canInfo: true
  },
  {
    name: "Cécile",
    lastname: "Fléchon",
    role: "user",
    email: "cecile@gmail.com",
    password: "$2b$10$eHvbJC0ZG2nKJcEMsfCXQ.9MiOlf64JLfXqfsozjOo0TcX.MXoNSu",
    avatar:
      "https://lh6.googleusercontent.com/owg21WZQEPq1mD0f2DRNHL_A6zPwvZgc_h-7SDV7H00Xqbwz2uuc1bVFEAztkpMLkRpOIkZGNJ-bdxDgd-by9tHQ90qvQ7THaCzV0pFE=s619",
    buildings: ["5e60d85c10d407000dcfc4c2"],
    newMessages: 0,
    messages: [],
    canMessage: true,
    canInfo: true
  },
  {
    name: "Jonathan",
    lastname: "Oreja",
    role: "user",
    email: "jonathan@gmail.com",
    password: "$2b$10$eHvbJC0ZG2nKJcEMsfCXQ.9MiOlf64JLfXqfsozjOo0TcX.MXoNSu",
    avatar:
      "https://lh3.googleusercontent.com/Lu3U9kitgzKTLI-fytl10vsakATGE_7lU-4ndezZPOCRe8RJxKr0F_6wxyHfp5AJJkaWAB73iQcPvkmbW9R6Ue25rh9sKQ7XhD3yZmyc=s900",
    buildings: ["5e60d85c10d407000dcfc4c2"],
    newMessages: 0,
    messages: [],
    canMessage: true,
    canInfo: true
  },
  {
    name: "Pascal",
    lastname: "Besson",
    role: "user",
    email: "pascal@gmail.com",
    password: "$2b$10$eHvbJC0ZG2nKJcEMsfCXQ.9MiOlf64JLfXqfsozjOo0TcX.MXoNSu",
    avatar:
      "https://lh5.googleusercontent.com/n4CL0vpNFPRGj9bwKMuiMyiLhtV5m4NI-E7sEgoi5XNTvz5XWCRD852Ds7MQKvaHIIkJ3RLfmCGbbSdjbdhZEGDsMcSZqcVS9vrQQpWp=s1600",
    buildings: ["5e60d85c10d407000dcfc4c2"],
    newMessages: 0,
    messages: [],
    canMessage: true,
    canInfo: true
  },
  {
    name: "Wendy",
    lastname: "Evora",
    role: "user",
    email: "wendy@gmail.com",
    password: "$2b$10$eHvbJC0ZG2nKJcEMsfCXQ.9MiOlf64JLfXqfsozjOo0TcX.MXoNSu",
    avatar:
      "https://lh5.googleusercontent.com/pQNEOnSNHhPS3_7Hf-d3OZYFm9h8Sy39rv2m_ymDx6C0Qt646mAzgg182Meks1KFbtbnn8x_HFvcEQmd3M3WBqGvNUpiZfhJrkM-skIB=s1600",
    buildings: ["5e60d85c10d407000dcfc4c2"],
    newMessages: 0,
    messages: [],
    canMessage: true,
    canInfo: true
  },
  {
    name: "Anthony",
    lastname: "Leduc",
    role: "user",
    email: "anthony@gmail.com",
    password: "$2b$10$eHvbJC0ZG2nKJcEMsfCXQ.9MiOlf64JLfXqfsozjOo0TcX.MXoNSu",
    avatar:
      "https://lh6.googleusercontent.com/rgtaoo5iKSI7ZTfdTsLecEttamnkQjBoA5f21hEuEYflsJkJETnNuplRxK4BpppyGKKPk27VMtWC4VWaP9sEKMoQRD8EMHU4TCpyXYQw=s1024",
    buildings: ["5e60d85c10d407000dcfc4c2"],
    newMessages: 0,
    messages: [],
    canMessage: true,
    canInfo: true
  },
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
