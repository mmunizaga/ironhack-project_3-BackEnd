var express = require("express");
var router = new express.Router();
const userModel = require("../models/User");

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
