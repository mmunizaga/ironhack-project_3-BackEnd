var express = require("express");
var router = new express.Router();
const userModel = require("../models/User");
const buildingModel = require("../models/Building");
const uploader = require("./../config/cloudinary");

router.get("/", function(req, res, next) {
  userModel
    .find()
    .populate("buildings")
    .populate("messages")
    .then(users => res.status(200).json(users))
    .catch(next);
});

router.get("/:id", function(req, res, next) {
  userModel
    .findById(req.params.id)
    .populate("buildings")
    .populate("messages")
    .then(user => res.status(200).json(user))
    .catch(next);
});

router.post("/", uploader.single("avatar"), (req, res, next) => {
  const { name, lastname, email, password, key } = req.body;
  if (!key) {
    return res.status(400).json("You need to provide a key");
  }

  const newUser = {
    name,
    lastname,
    email,
    password
  };

  if (req.file) {
    newUser.avatar = req.file.secure_url;
  }

  buildingModel
    .findOne({ keys: key })
    .then(building => {
      if (building === null) {
        return res.status(400).json("Invalid key");
      }
      newUser.buildings = [building._id];
      userModel
        .create(newUser)
        .then(createdUser => {
          buildingModel
            .findByIdAndUpdate(building._id, { $pull: { keys: key }})
            .then(updatedBuilding => {
              res.status(200).json(createdUser);
            })
            .catch(next);
        })
        .catch(next);
    })
    .catch(next);
});

router.patch("/:id", (req, res, next) => {
  const {
    name,
    lastname,
    role,
    email,
    password,
    avatar,
    buildings,
    newMessages,
    canMessage,
    canInfo
  } = req.body;
  const updateUser = {
    name,
    lastname,
    role,
    email,
    password,
    avatar,
    buildings,
    newMessages,
    canMessage,
    canInfo
  };

  userModel
    .findByIdAndUpdate(req.params.id, updateUser, { new: true })
    .then(dbRes => res.status(200).json(dbRes))
    .catch(next);
});

router.delete("/id", (req, res, next) => {
  userModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => res.status(200).json(dbRes))
    .catch(next);
});

module.exports = router;
